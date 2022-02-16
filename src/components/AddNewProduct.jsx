import React, { useState } from 'react';

const AddNewProduct = ({ setNewProduct }) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (name === '' || price <= 0 || description === '' || category === '') {
			if (name === '') alert('Name cannot be empty!');
			else if (price <= 0) alert('Invalid price!');
			else if (description === '') alert('Description cannot be empty!');
			else if (category === '') alert('Category cannot be empty!');
		} else {
			setNewProduct({
				name: name,
				price: Number.parseFloat(price),
				description: description,
				category: category,
			});
			setName('');
			setPrice(0);
			setDescription('');
			setCategory('');
			alert('Product has been saved!');
		}
	};

	return (
		<div>
			<form id='add-new-product-form'>
				<h1>Add new product</h1>
				<br />
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						className='form-control'
						id='name'
						value={name}
						onChange={(event) => {
							setName(event.target.value);
						}}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='price' className='form-label'>
						Price
					</label>
					<input
						className='form-control'
						id='price'
						value={price}
						onChange={(event) => {
							setPrice(event.target.value);
						}}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>
						Description
					</label>
					<input
						className='form-control'
						id='description'
						value={description}
						onChange={(event) => {
							setDescription(event.target.value);
						}}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='category' className='form-label'>
						Category
					</label>
					<input
						className='form-control'
						id='category'
						value={category}
						onChange={(event) => {
							setCategory(event.target.value);
						}}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>
						Upload an Image
					</label>{' '}
					<br />
					<input type='file' id='img' name='img' accept='image/*' />
				</div>
				<div className='mb-3 form-check'></div>
				<button
					type='submit'
					className='btn btn-primary'
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddNewProduct;
