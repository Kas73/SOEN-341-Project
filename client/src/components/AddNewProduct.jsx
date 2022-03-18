import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useCookies } from "react-cookie";

const AddNewProduct = () => {
    const oneMegabyteAsBits = 1048576
    const fiveMegabytesAsBits = oneMegabyteAsBits * 5
    const [cookies, setCookie] = useCookies()
    const [product_name, setProductName] = useState('')
    const [product_price, setProductPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [product_img, setProductImage] = useState('');

    async function addProductToDatabase() {
        const seller_name = cookies.user_name

        const task = {
            product_name: product_name,
            product_price: product_price,
            description: description,
            seller_name: seller_name,
            product_img: product_img
        }

        if(task.product_name && task.product_price >= 0 && task.description && task.seller_name && task.product_img) {
            const response = await axios
                .post("/products", task)
            
            if(response.data) {
                console.log("Product has been added to the database!")
            }
        }
        else {
            console.log("Product name, price, description and an image are required")
        }
    }

    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    async function imageUpload(e) {
        const file = e.target.files[0];
        if(file.size > fiveMegabytesAsBits) {
            window.alert("Chosen file is greater than 5MB please upload file of smaller size")
            return
        }
        const imgAsBase64 = await convertImageToBase64(file)
        setProductImage(imgAsBase64)
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
                    Description
                </label>
                <input
                    type="text"
                    className='form-control'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='quantity' className='form-label'>
                    Upload an image (5 mb or less):
                </label>
                <input
                    type="file"
                    className='form-control'
                    id='product_img'
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => imageUpload(e)}
                />
                <img src={product_img} alt="Your image here!" />
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