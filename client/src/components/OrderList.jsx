import React, { useState } from 'react';
import OrderProductList from './OrderProductList';

const OrderList = ({ eachOrder, cancelOrder }) => {
	var products = eachOrder.order;
	console.log();
	return (
		<tr>
			<td>{eachOrder._id}</td>
			<td>
				<ol>
					<OrderProductList products={products} />
				</ol>
			</td>
			<td>${eachOrder.total}</td>
			<td>
				{' '}
				<button
					onClick={(e) => cancelOrder(eachOrder._id)}
					className='btn btn-dark'
				>
					🗑️
				</button>{' '}
			</td>
		</tr>
	);
};

export default OrderList;
