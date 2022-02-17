import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import AddNewProduct from './components/AddNewProduct';
import Navbar from "./components/layout/Navbar"
import './App.css';

const App = () => {
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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
