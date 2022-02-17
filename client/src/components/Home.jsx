import React, { Component } from 'react';
import axios from "axios";
import AddNewProduct from './AddNewProduct';
import ProductList from './ProductList'
import ListProducts from './ProductList';

class Home extends Component {
	state = {
		products: [],
	};

	componentDidMount() {
		this.getProducts();
	}
	
	getProducts = () => {
		axios
			.get('/products')
			.then((res) => {
				if(res.data) {
					this.setState({
						products: res.data
					});
				}
			})
			.catch((err) => console.log(err))
	}

	render () {
		let {products} = this.state;

		return(
			<div id='home'>
				<h1>HOME</h1>
				<ListProducts products={products} />
			</div>
		)
	}
};

export default Home;
