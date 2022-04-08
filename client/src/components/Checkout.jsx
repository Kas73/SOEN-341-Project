import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import CheckoutListRow from './CheckoutListRow';

const Checkout = () => {
	const [cart, setCart] = useState([]);
	const [cookies, setCookie] = useCookies();
	const [totalPrice, setTotalPrice] = useState(0);
	const [userInfo, setUserInfo] = useState({});
	const [order, setOrder] = useState([]);
	const [card_number, setCardNumber] = useState('');
	const [cardholder_name, setCardHolderName] = useState('');
	const [expiration, setExpiration] = useState('');
	const [billing_address, setBillingAddress] = useState('');
	const [cvv, setCvv] = useState('');

	var priceOfEachProduct = 0;
	var subtotal = 0;
	var total = 0;
	const gst = 0.05;
	const qst = 0.09975;

	async function createNewOrder() {
		const task = {
			order: order,
			user_name: cookies.user_name,
			card_number: card_number,
			cardholder_name: cardholder_name,
			expiration: expiration,
			billing_address: billing_address,
			cvv: cvv,
			total: totalPrice,
		};

		console.log(task);

		if (
			task.order &&
			task.user_name &&
			task.card_number &&
			task.cardholder_name &&
			task.expiration &&
			task.billing_address &&
			task.cvv &&
			task.total
		) {
			axios
				.post('/orders', task)
				.then((res) => {
					if (res.data) {
						console.log('Order');
						console.log(res.data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	useEffect(() => {
		async function getUserCart() {
			const response = await axios.get(`/carts/${cookies.user_name}`);

			if (!response.data) {
				window.alert('Error while getting products');
				return;
			}

			//console.log(JSON.stringify(response.data.cart));
			setCart(response.data.cart);
			setOrder(response.data.cart);
		}

		async function getUser() {
			const response = await axios.get(`/users/${cookies.user_name}`);
			if (response.data) {
				setUserInfo(response.data);
			}
		}

		getUser();
		getUserCart();
		return;
	}, []);

	useEffect(() => {
		cart.forEach((product) => {
			priceOfEachProduct = product.quantity * product.price;
			subtotal += priceOfEachProduct;
		});
		total = subtotal + subtotal * gst + subtotal * qst;
		setTotalPrice(Math.round(total * 100) / 100);
	});

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6 order-md-1'>
					<h4 className='mb-3'>Payment details</h4>
					<form className='needs-validation' noValidate>
						<div className='row'>
							<div className='col-md-6 mb-3'>
								<label htmlFor='firstName'>First name</label>
								<input
									value={userInfo.first_name}
									type='text'
									className='form-control'
									id='firstName'
									placeholder=''
									defaultValue=''
									required
								/>
								<div className='invalid-feedback'>
									Valid first name is required.
								</div>
							</div>
							<div className='col-md-6 mb-3'>
								<label htmlFor='lastName'>Last name</label>
								<input
									value={userInfo.last_name}
									type='text'
									className='form-control'
									id='lastName'
									placeholder=''
									defaultValue=''
									required
								/>
								<div className='invalid-feedback'>
									Valid last name is required.
								</div>
							</div>
						</div>

						<div className='mb-3'>
							<label htmlFor='username'>Username</label>
							<div className='input-group'>
								<div className='input-group-prepend'>
									<span className='input-group-text'>@</span>
								</div>
								<input
									value={userInfo.user_name}
									type='text'
									className='form-control'
									id='username'
									placeholder='Username'
									required
								/>
								<div className='invalid-feedback' style={{ width: '100%' }}>
									Your username is required.
								</div>
							</div>
						</div>

						<div className='mb-3'>
							<label htmlFor='email'>
								Email <span className='text-muted'>(Optional)</span>
							</label>
							<input
								value={userInfo.email}
								type='email'
								className='form-control'
								id='email'
								placeholder='you@example.com'
							/>
							<div className='invalid-feedback'>
								Please enter a valid email address for shipping updates.
							</div>
						</div>

						<div className='mb-3'>
							<label htmlFor='address'>Shipping Address</label>
							<input
								value={userInfo.address}
								type='text'
								className='form-control'
								id='address'
								placeholder='1234 Main St'
								required
							/>
							<div className='invalid-feedback'>
								Please enter your shipping address.
							</div>
						</div>

						<div className='mb-3'>
							<label htmlFor='address2'>Billing address</label>
							<input
								onChange={(e) => setBillingAddress(e.target.value)}
								type='text'
								className='form-control'
								id='address2'
								placeholder='Apartment or suite'
							/>
						</div>

						<hr className='mb-4' />

						<h4 className='mb-3'>Payment</h4>

						<div className='row'>
							<div className='col-md-6 mb-3'>
								<label htmlFor='cc-name'>Name on card</label>
								<input
									onChange={(e) => setCardHolderName(e.target.value)}
									type='text'
									className='form-control'
									id='cc-name'
									placeholder=''
									required
								/>
								<small className='text-muted'>
									Full name as displayed on card
								</small>
								<div className='invalid-feedback'>Name on card is required</div>
							</div>
							<div className='col-md-6 mb-3'>
								<label htmlFor='cc-number'>Credit card number</label>
								<input
									onChange={(e) => setCardNumber(e.target.value)}
									type='text'
									className='form-control'
									id='cc-number'
									placeholder=''
									required
								/>
								<div className='invalid-feedback'>
									Credit card number is required
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-3 mb-3'>
								<label htmlFor='cc-expiration'>Expiration</label>
								<input
									onChange={(e) => setExpiration(e.target.value)}
									type='text'
									className='form-control'
									id='cc-expiration'
									placeholder=''
									required
								/>
								<div className='invalid-feedback'>Expiration date required</div>
							</div>
							<div className='col-md-3 mb-3'>
								<label htmlFor='cc-cvv'>CVV</label>
								<input
									onChange={(e) => setCvv(e.target.value)}
									type='text'
									className='form-control'
									id='cc-cvv'
									placeholder=''
									required
								/>
								<div className='invalid-feedback'>Security code required</div>
							</div>
						</div>
						<hr className='mb-4' />
					</form>
				</div>
				<div className='col-md-6 order-md-2'>
					<h4 className='d-flex justify-content-between align-items-center mb-3'>
						<span className='text-muted'>Your cart</span>
						<span className='badge badge-secondary badge-pill'>3</span>
					</h4>

					<table class='table'>
						<thead>
							<tr>
								<th scope='col'>Product</th>
								<th scope='col'>Quantity</th>
								<th scope='col'>Price</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((cartitem) => {
								return (
									<CheckoutListRow
										name={cartitem.product_name}
										quantity={cartitem.quantity}
										price={cartitem.price}
									/>
								);
							})}
							<tr>
								<td scope='col'>GST</td>
								<td scope='col'></td>
								<td scope='col'>5%</td>
							</tr>
							<tr>
								<td scope='col'>QST</td>
								<td scope='col'></td>
								<td scope='col'>9.975%</td>
							</tr>
							<tr>
								<th scope='col'>Total</th>
								<th scope='col'></th>
								<th scope='col'>${totalPrice}</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<a href='/order-successful'>
				<button
					onClick={createNewOrder}
					className='btn btn-primary right-align w-100'
				>
					Order
				</button>
			</a>
		</div>
	);
};

export default Checkout;
