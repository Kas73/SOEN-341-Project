import React, {Component} from "react";
import axios from 'axios';

class AddNewProduct extends Component {
    state = {
        product_name: "",
        product_price: 0,
        quantity_in_stock: 0,
    };

    addProduct = () => {
        const task = {
            product_name: this.state.product_name,
            product_price: this.state.product_price,
            quantity_in_stock: this.state.quantity_in_stock
        }

        if(task.product_name && task.product_price >= 0 && task.quantity_in_stock >= 0) {
            axios
                .post("/products", task)
                .then((res) => {
                    if(res.data) {
                        this.setState({ product_name: "",
                            product_price: 0,
                            quantity_in_stock: 0, });
                    }
                })
                .catch((err) => console.log(err));
        }
        else {
            console.log("Product name, price and quantity are required")
        }
    }

    updateProductName = (e) => {
        this.setState({
            product_name: e.target.value,
        });
    }

    updateProductPrice = (e) => {
        this.setState({
            product_price: e.target.value,
        });
    }

    updateQuantity = (e) => {
        this.setState({
            quantity_in_stock: e.target.value,
        })
    }

    render() {
        let { product_name, product_price, quantity_in_stock } = this.state;
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
						onChange={this.updateProductName}
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
						onChange={this.updateProductPrice}
					/>
				</div>
				<div className='mb-3 form-check'></div>
				<button
					type='submit'
					className='btn btn-primary'
					onClick={this.addProduct}
				>
					Add Product!
				</button>
			</form>
            </div>
        )
    }
}

export default AddNewProduct;