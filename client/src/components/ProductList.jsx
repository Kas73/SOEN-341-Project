import React from 'react';

const ListProducts = ({products, categoryFilter}) => {
   // console.log(products);
    //console.log(categoryFilter);
    var filtered = products;

    //Do we have categories to filter on?
    if(categoryFilter && categoryFilter.length != 0){
        var filtered = products.filter((product)=>{
            //Only want products that have the categories that are being filtered on
            return product.categories.filter((category) => {
                return categoryFilter.indexOf(category) >= 0
            }) != '' ? true : false
        });
        
    }
    //console.log(filtered)
    return (
        <div className="grid-container">
            <main className="row">
                
            {filtered && filtered.length > 0 ? (
              
                filtered.map((product) => {
                   
                    return (
                        <div data-testid='product-entry' key={product._id} className ="card">
                            <a href={`/details/${product._id}`} data-testid='product-image-link'>
                            <img src={product.product_img} alt={product.product_name} data-testid='product-image'/>
                            </a>
                            <div className="card-body" data-testid='product-name-and-price'> 
                            <a href={`/details/${product._id}`} data-testid='product-name-link'>{product.product_name}</a>, ${product.product_price}</div>
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

export default ListProducts;