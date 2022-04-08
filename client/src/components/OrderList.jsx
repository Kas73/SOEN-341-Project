import React, { useState } from 'react';
import OrderProductList from './OrderProductList';

const OrderList = ({ eachOrder, cancelOrder }) => {
	var products = eachOrder.order;
	return (
		<tr>
			<td data-testid="order-id">{eachOrder._id}</td>
			<td>
				<ol>
					<OrderProductList products={products} />
				</ol>
			</td>
			<td data-testid="order-total">${eachOrder.total}</td>
			<td>
				{' '}
				<button
					onClick={(e) => cancelOrder(eachOrder._id)}
					className='btn btn-dark'
					data-testid="order-cancel-button"
				>
					🗑️
				</button>{' '}
			</td>
		</tr>
	);
};

export default OrderList;
