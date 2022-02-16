import React from 'react';
import {useParams} from 'react-router-dom'

const fakeData = {
    name: "A product!",
    price: 10.00,
    description: "A product for our website!",
    seller: "Me!"
}

const ProductDetails = ({setProductDetails}) => {
    const { id } = useParams();

	return (
		<div id='product_details'>
			<h1>{fakeData.name}</h1>
            <p>Seller: {fakeData.seller}</p>
            <p>{fakeData.description}</p>
            <p>Price: ${fakeData.price}</p>
            <p>Id: {id}</p>
		</div>
	);
};

export default ProductDetails;