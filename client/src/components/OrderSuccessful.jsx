import React from 'react';

const OrderSuccessful = () => {
	return (
		<div style={{ textAlign: 'center', padding: '10%' }}>
			<h2 style={{ marginBottom: '100px', color: 'grey' }}>
				Your order was placed successfully!
			</h2>
			<a href='/order-history'>
				<button className='btn btn-dark w-25 '>View your order history</button>
			</a>{' '}
			<a href='/review-products'>
				<button className='btn btn-dark w-25'>Leave a rating</button>
			</a>
		</div>
	);
};

export default OrderSuccessful;
