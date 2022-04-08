import React from 'react';

const OrderProductList = ({ products }) => {
	return products.map((product) => {
		return (
			<li data-testid="order-product-item">
				<strong>
					<p data-testid="order-product-name">{product.product_name}</p>
				</strong>
				<p data-testid="order-product-price">Price: ${product.price}</p>
				<p data-testid="order-product-quantity">Quantity: {product.quantity}</p>
			</li>
		);
	});
};

export default OrderProductList;
