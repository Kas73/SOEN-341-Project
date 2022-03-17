import React from 'react';
import CartRow from './CartRow';
import axios from 'axios';

function Cart() {
	// const data = [
	// 	{
	// 		name: 'Apples',
	// 		price: '0.99',
	// 		quantity: 5,
	// 	},
	// 	{
	// 		name: 'Mangoes',
	// 		price: '0.98',
	// 		quantity: 2,
	// 	},
	// 	{
	// 		name: 'Bananas',
	// 		price: '0.79',
	// 		quantity: 3,
	// 	},
	// 	{
	// 		name: 'Strawberries',
	// 		price: '1.59',
	// 		quantity: 1,
	// 	},
	// ];

	async function addNewCart() {
		const task = {
			cart: [
				{ product_name: 'Demo', price: 0.99, quantity: 5 },
				{ product_name: 'Demo', price: 0.99, quantity: 5 },
			],
			user_name: 'ABCDE',
		};

		if (task.user_name && task.cart) {
			axios
				.post(`/carts`, task)
				.then((res) => {
					if (res.data) {
						console.log('Item added successfully.');
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

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
					{/* {data.map((item) => {
						return (
							<CartRow
								
							/>
						);
					})} */}
					<CartRow />
				</tbody>
			</table>
			<br></br>

			<a href='/checkout'>
				<button className='btn btn-primary right-align w-100'>Checkout</button>
			</a>
			<button
				className='btn btn-primary right-align w-100'
				onClick={addNewCart}
				type='button'
			>
				Add to cart
			</button>
		</div>
	);
}

export default Cart;
