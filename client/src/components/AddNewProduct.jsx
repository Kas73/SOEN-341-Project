import React, {Component} from "react";
import axios from 'axios';
import { useState } from "react";

const AddNewProduct = () => {
    const [product_name, setProductName] = useState('')
    const [product_price, setProductPrice] = useState(0);
    const [quantity_in_stock, setQuantityInStock] = useState(0);

    async function addProductToDatabase() {

        const task = {
            product_name: product_name,
            product_price: product_price,
            quantity_in_stock: quantity_in_stock
        }

        if(task.product_name && task.product_price >= 0 && task.quantity_in_stock >= 0) {
            const response = await axios
                .post("/products", task)
            
            if(response.data) {
                console.log("Product has been added to the database!")
            }
        }
        else {
            console.log("Product name, price and quantity are required")
        }
    }

    return (
        <div>
            <form id='add-new-product-form'>
            <h1>Add new product</h1>
            <br />
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                    Product Name
                </label>
                <input
                    type="text"
                    className='form-control'
                    id='product_name'
                    value={product_name}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='price' className='form-label'>
                    Price per unit
                </label>
                <input
                    type="number"
                    className='form-control'
                    id='product_price'
                    value={product_price}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='quantity' className='form-label'>
                    Quantity
                </label>
                <input
                    type="number"
                    className='form-control'
                    id='quantity_in_stock'
                    value={quantity_in_stock}
                    onChange={(e) => setQuantityInStock(e.target.value)}
                />
            </div>
            <div className='mb-3 form-check'></div>
            <button
                type='button'
                className='btn btn-primary'
                onClick={addProductToDatabase}
            >
                Add Product!
            </button>
        </form>
        </div>
    )
}

export default AddNewProduct;