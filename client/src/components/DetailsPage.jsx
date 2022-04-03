import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Spinner from './layout/Spinner';

const DetailsPage = () => {
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [cookies, setCookie] = useCookies();
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();
	const navigation = useNavigate();

	useEffect(() => {
		async function getProduct() {
			setIsLoading(true);
			const response = await axios.get('/products/' + id);

			if (!response.data) {
				window.alert('Could not find product with id: ' + id);
				return;
			}

			setProduct(response.data);
			setIsLoading(false);
		}

		getProduct();
		return;
	}, []);

	async function addToCart() {
		if (!cookies.user_name) {
			window.alert('Please sign in to add to cart');
			navigation('/login');
		}

		const response = await axios.get(`/carts/${cookies.user_name}`);

		if (response.data) {
			//The cart already exists
			const cart = response.data.cart;
			const itemInCart = cart.find(
				(obj) => obj.product_name == product.product_name
			);

			if (itemInCart) {
				//This product is already a part of their cart
				itemInCart.quantity = itemInCart.quantity + quantity;
			} else {
				cart.push({
					product_name: product.product_name,
					price: product.product_price,
					quantity: quantity,
				});
			}

			const task = {
				cart: cart,
				user_name: cookies.user_name,
			};
			const updateResponse = await axios.patch(
				`/carts/${cookies.user_name}`,
				task
			);

			if (updateResponse.data) {
				window.alert('Cart has been updated!');
				navigation('/cart');
			}
		} else {
			const task = {
				cart: [
					{
						product_name: product.product_name,
						price: product.product_price,
						quantity: quantity,
					},
				],
				user_name: cookies.user_name,
			};

			const response = await axios.post(`/carts`, task);

			if (response.data) {
				window.alert('Item added to cart!');
				navigation('/cart');
			}
		}
	}

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				<div class='container'>
					<div class='card'>
						<div class='card-body'>
							<h3 class='card-title'>{product.product_name}</h3>
							<div class='row'>
								<div class='col-lg-5 col-md-5 col-sm-6'>
									<div class='white-box text-center'>
										<img src={product.product_img} class='img-responsive'></img>
									</div>
								</div>
								<div class='col-lg-7 col-md-7 col-sm-6'>
									<h4 class='box-title mt-5'>Product description</h4>
									<p>{product.description}</p>
									<h2 class='mt-5'>
										${product.product_price}
										<small class='text-success'></small>
									</h2>
									<button onClick={(e) => setQuantity(quantity + 1)}>+</button>
									<input
										type='number'
										id='quantity'
										min='1'
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
									/>
									<button onClick={(e) => setQuantity(quantity - 1)}>-</button>
									<button
										class='btn btn-primary btn-rounded'
										onClick={addToCart}
									>
										Add to cart
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default DetailsPage;
