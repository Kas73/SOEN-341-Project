import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Login from './components/Login';

const App = () => {
	const [newProduct, setNewProduct] = useState({});
	const [loginInfo, setLoginInfo] = useState({});

	console.log(newProduct);
	console.log(loginInfo);

	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route
						exact
						path='/addnewproduct'
						element={<AddNewProduct setNewProduct={setNewProduct} />}
					/>
					<Route
						exact
						path='/login'
						element={<Login setLoginInfo={setLoginInfo} />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
