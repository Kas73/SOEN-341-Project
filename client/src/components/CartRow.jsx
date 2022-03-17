import React from 'react';

function CartRow() {
	return (
		<tr>
			<td colspan='4'>
				<table class='table mb-0'>A</table>
			</td>
			<td colspan='4'>
				<table class='table mb-0'>B</table>
			</td>
			<td colspan='4'>
				<table class='table mb-0'>C</table>
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
