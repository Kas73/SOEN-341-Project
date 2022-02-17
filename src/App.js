import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
	const [newProduct, setNewProduct] = useState({});
	const [loginInfo, setLoginInfo] = useState({});
	const [signupInfo, setSignUp] = useState({});

	console.log(newProduct);
	console.log(loginInfo);
	console.log(signupInfo);

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
					<Route
						exact
						path='/signup'
						element={<SignUp setSignUp={setSignUp} />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
