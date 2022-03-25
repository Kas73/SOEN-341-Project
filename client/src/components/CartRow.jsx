import React from 'react';

const CartRow = ({item}) => {
	console.log(JSON.stringify(item))
	return (
		<tr>
			<td colspan='4'>
				<table class='table mb-0'>{item.product_name}</table>
			</td>
			<td colspan='4'>
				<table class='table mb-0'>{item.price}</table>
			</td>
			<td colspan='4'>
				<table class='table mb-0'>{item.quantity}</table>
			</td>
			<td colspan='4' className='right-align'>
				<button className='btn btn-dark'>+</button>{' '}
				<button className='btn btn-dark'>-</button>{' '}
				<button className='btn btn-dark'>🗑️</button>{' '}
			</td>
		</tr>
	);
}

export default CartRow;
