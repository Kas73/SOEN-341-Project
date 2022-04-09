import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Spinner from './layout/Spinner';
import OrderList from './OrderList';

const OrderHistory = () => {
	const [orders, setOrders] = useState([]);
	const [cookies, setCookie] = useCookies();
	const navigation = useNavigate();

	useEffect(() => {
		async function getOrders() {
			const response = await axios.get(`/orders/${cookies.user_name}`);

			if (!response.data) {
				window.alert('Could not find orders for user: ' + cookies.user_name);
				return;
			}

			setOrders(response.data);
			// console.log(response.data);
		}

		getOrders();
		return;
	}, []);

	async function cancelOrder(_id) {
		const response = await axios.delete(`/orders/${_id}`);
		if (!response.data) {
			window.alert('Could not delete order.');
			return;
		}
		setOrders(response.data);
		window.location.reload(true);
	}

	return (
		<main className='row'>
			<h1>{cookies.user_name}'s order history</h1>
			<table class='table'>
				<thead>
					<tr>
						<th scope='col'>Orders</th>
						<th scope='col'>Products</th>
						<th scope='col'>Total</th>
						<th scope='col'>Cancel order</th>
					</tr>
				</thead>
				<tbody>
					{orders && orders.length > 0 ? (
						orders.map((order) => {
							return <OrderList eachOrder={order} cancelOrder={cancelOrder} />;
						})
					) : (
						<li>No Orders</li>
					)}
				</tbody>
			</table>
			<a href='/review-products'>
				<button className='btn btn-dark w-25'>Leave a rating on one of your orders</button>
			</a>
		</main>
	);
};
export default OrderHistory;
