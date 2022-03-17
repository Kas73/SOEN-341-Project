import React from 'react';




const ListProducts = ({products}) => {
    return (
        <ul>
            {products && products.length > 0 ? (
                products.map((product) => {
                    return (
                        <li 
                            key={product._id}>  
                             <a href={"/detailspage/"+product._id}>
                                 {product.product_name}, ${product.product_price}</a>  
                        </li>
                    )
                })
            ) : (
                <li>No Products(s) available</li>
            )}
        </ul>
    )
}

export default ListProducts;