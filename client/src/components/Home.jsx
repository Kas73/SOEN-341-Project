import React, { useEffect, useState } from 'react';
import axios from "axios";
import ListProducts from './ProductList';

const Home = () => {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		async function getProducts() {
			const response = await axios
				.get('/products')
			
			if(!response.data) {
				window.alert("Error while getting products")
				return
			}

			setProducts(response.data)
		}

		getProducts()
		return;
	}, [])

	return(
		<div id='home'>
			<h1>HOME</h1>
			<ListProducts products={products} />
		</div>
	)
};

export default Home;
