import React from 'react';

const CheckoutListRow = ({name, quantity, price}) => {

	return (
		<li className='list-group-item d-flex justify-content-between'>
						<span>{name}</span>
                        <span>{quantity}</span>
						<strong>{price}</strong>
					</li>
	);
}

export default CheckoutListRow;
