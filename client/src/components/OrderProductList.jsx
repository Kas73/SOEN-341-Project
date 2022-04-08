import React from 'react';

const OrderProductList = ({ products }) => {
	return products.map((product) => {
		return (
			<li>
				<strong>
					<p>{product.product_name}</p>
				</strong>
				<p>Price: ${product.price}</p>
				<p>Quantity: {product.quantity}</p>
			</li>
		);
	});
};

export default OrderProductList;
