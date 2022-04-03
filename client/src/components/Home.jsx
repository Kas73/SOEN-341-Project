import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListProducts from './ProductList';
import Spinner from './layout/Spinner';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function getProducts() {
			setIsLoading(true);
			const response = await axios.get('/products');

			if (!response.data) {
				window.alert('Error while getting products');
				return;
			}

			setProducts(response.data);
			setIsLoading(false);
		}

		getProducts();

		return;
	}, []);

	return (
		<div id='home'>
			<h1>HOME</h1>
			{isLoading ? <Spinner /> : <ListProducts products={products} />}
		</div>
	);
};

export default Home;
