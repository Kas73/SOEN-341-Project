import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Navbar from './components/layout/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import DetailsPage from './components/DetailsPage';

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
          <Route exact path="/DetailsPage/:id"element={<DetailsPage/>}
          />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
