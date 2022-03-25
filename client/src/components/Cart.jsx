import React, { useEffect, useState } from 'react';
import CartRow from './CartRow';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Cart() {
	const [cart, setCart] = useState({});
	const [cookies, setCookie] = useCookies();
	const navigation = useNavigate();


	useEffect(() => {
		if(!cookies.user_name) {
			window.alert("You must sign in to see your cart")
			navigation("/login")
		}

		async function getUserCart() {
			const response = await axios
				.get(`/carts/${cookies.user_name}`)
			
			if(!response.data) {
				window.alert("Error while getting products")
				return
			}

			console.log(JSON.stringify(response.data.cart))
			setCart(response.data.cart)
		}

		getUserCart();
		return;
	}, [])

	return (
		<div className='cart'>
			<br></br>
			<h1>Cart</h1>
			<br></br>
			<table class='table'>
				<thead>
					<tr>
						<td colspan='4'>
							<table class='table mb-0'>Item</table>
						</td>
						<td colspan='4'>
							<table class='table mb-0'>Price</table>
						</td>
						<td colspan='4'>
							<table class='table mb-0'>Quantity</table>
						</td>
					</tr>
				</thead>
				<tbody>
					{ cart && cart.length > 0 ?
					cart.map((item) => {
						return (
							<CartRow
								item={item}
							/>
						);
					}) :
					null}
				</tbody>
			</table>
			<br></br>

			<a href='/checkout'>
				<button className='btn btn-primary right-align w-100'>Checkout</button>
			</a>
		</div>
	);
}

export default Cart;
