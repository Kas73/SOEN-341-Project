import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import AddNewProduct from './components/AddNewProduct';
import Navbar from "./components/layout/Navbar"
import Login from "./components/Login"
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
	const [signupInfo, setSignUp] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/create-product"
            element={<AddNewProduct />} />
          <Route
						exact
						path='/login'
						element={<Login />}
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
