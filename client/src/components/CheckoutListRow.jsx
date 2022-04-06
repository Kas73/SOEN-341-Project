import React from 'react';

const CheckoutListRow = ({ name, quantity, price }) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{quantity}</td>
			<td>${price}</td>
		</tr>
	);
};

export default CheckoutListRow;
