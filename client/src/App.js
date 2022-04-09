import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import OrderSuccessful from './components/OrderSuccessful';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import DetailsPage from './components/DetailsPage';
import SearchResults from './components/SearchResults';
import OrderHistory from './components/OrderHistory';
import ReviewProduct from './components/ReviewProduct'
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/create-product' element={<AddNewProduct />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/signup' element={<SignUp />} />
					<Route exact path='/checkout' element={<Checkout />} />
					<Route exact path='/cart' element={<Cart />} />
					<Route exact path='/details/:id' element={<DetailsPage />} />
					<Route
						exact
						path='/search-results/:query'
						element={<SearchResults />}
					/>
					<Route exact path='/order-history' element={<OrderHistory />} />
					<Route exact path='/order-successful' element={<OrderSuccessful />} />
					<Route exact path='/review-products' element={<ReviewProduct/>} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
