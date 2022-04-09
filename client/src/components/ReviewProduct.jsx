import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import OrderReviewList from './OrderReviewList';

const ReviewProduct = () => {
	const [orders, setOrders] = useState([]);
	const [cookies, setCookie] = useCookies();
	const navigation = useNavigate();

	useEffect(() => {
        if(!cookies.user_name) {
            window.alert("You must sign in to leave a review.")
            navigation('/login')
            return;
        }

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

	return (
		<main className='row'>
			<h1>Leave reviews for your orders!</h1>
			<table class='table'>
				<thead>
					<tr>
						<th scope='col'>Orders</th>
						<th scope='col'>Products</th>
					</tr>
				</thead>
				<tbody>
					{orders && orders.length > 0 ? (
						orders.map((order) => {
							return <OrderReviewList eachOrder={order} />;
						})
					) : (
						<li>No Orders</li>
					)}
				</tbody>
			</table>
		</main>
	);
};
export default ReviewProduct;
