import React, { useState } from 'react';
import OrderProductReviewList from './OrderProductReviewList';

const OrderReviewList = ({ eachOrder }) => {
	var products = eachOrder.order;
	return (
		<tr>
			<td data-testid="order-id">{eachOrder._id}</td>
			<td>
				<ol>
					<OrderProductReviewList products={products} />
				</ol>
			</td>
		</tr>
	);
};

export default OrderReviewList;
