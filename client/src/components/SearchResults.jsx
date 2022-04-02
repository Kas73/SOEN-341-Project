import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
	const {query} = useParams();
	
  useEffect(() => {
		async function getProducts() {
			const response = await axios
				.get('/products-search/'+ query)
			
			if(!response.data) {
				window.alert("Error while getting products")
				return
			}
      
      if(response.data.length){
        setProducts(response.data)
      }
      else{
        setProducts([response.data])
      }

			
      console.log(response.data)
      console.log(response.data.length)
		}

		getProducts()
		return;
	}, [])
  

  return(
    
      <div className="grid-container">
        <main className="row">
        
        {products && products.length > 0 ? (
            products.map((product) => {
                return (
                    <div key={product._id} className ="card">
                        <a href={`/details/${product._id}`}>
                        <img src={product.product_img} alt={product.product_name} />
                        </a>
                        <div className="card-body"> 
                        <a href={`/details/${product._id}`}>{product.product_name}</a>, ${product.product_price}</div>
                    </div>
                )
            })
        ) : (
            <li>No Products(s) available</li>
        )}
        </main>
    </div>
  )

}
export default SearchResults