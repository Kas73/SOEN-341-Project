import React from 'react';

const fakeData = {
    name: "A product!",
    price: 10.00,
    description: "A product for our website!",
    seller: "Me!"
}

const ProductDetails = ({setProductDetails}) => {


	return (
		<div id='product_details'>
			<h1>{fakeData.name}</h1>
            <p>Seller: {fakeData.seller}</p>
            <p>{fakeData.description}</p>
		</div>
	);
};

export default ProductDetails;