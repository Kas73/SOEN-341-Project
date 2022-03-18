import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailsPage = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
		async function getProduct() {
			const response = await axios
				.get('/products/'+ id)

			if(!response.data) {
				window.alert("Could not find product with id: " + id)
				return
			}

			setProduct(response.data)
		}

		getProduct()
		return;
	}, [])



    return(

        <div class="container">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">{product.product_name}</h3>
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center"><img src={product.product_img} class="img-responsive"></img></div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h4 class="box-title mt-5">Product description</h4>
                            <p>{product.description}</p>
                            <h2 class="mt-5">
                                {product.product_price}<small class="text-success"></small>
                            </h2>

                            <button class="btn btn-primary btn-rounded">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default DetailsPage