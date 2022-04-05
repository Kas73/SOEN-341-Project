import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListProducts from './ProductList';
import Spinner from './layout/Spinner';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [checkedState, setCheckedState] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function getCategories() {
			const response = await axios
				.get('/categories')
			
			if(!response.data) {
				window.alert("Error while getting categories")
				return
			}

			setCategories(response.data)
			setCheckedState(new Array(response.data.length).fill(false))
		}

		getCategories()
		return;
	}, [])


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
	

	function handleCheck (position) {
		const updatedCheckedState = checkedState.map((item, index)=>
		index === position ? !item : item
		);
		
		setCheckedState(updatedCheckedState);
		
		const updatedSelectedCategories = [];
        categories.filter((item, index)=>{
            if(updatedCheckedState[index]){
                updatedSelectedCategories.push(item.category_name);
            }
        });

		setSelectedCategories(updatedSelectedCategories);
	}

	return(
		<div id='home'>
			<h1>HOME</h1>
			<h4>Categories</h4>
			<main className="row">
			{categories && categories.length > 0 ? (
				
				categories.map((v, i) => (
					<li key={i}>
						<input
						type="checkbox"
						data-key={v._id}                  
						onChange={(e)=>handleCheck(i)}            
						checked={checkedState[i]} 
						/>
						<label>{v.category_name}</label>
					</li>
				))
				): (
					<li>No Categories</li>
				)}
				</main>
				
			{isLoading ? <Spinner /> : <ListProducts products={products} categoryFilter={selectedCategories} />}
		</div>
		)
};

export default Home;
