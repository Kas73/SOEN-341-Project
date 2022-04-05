import React from 'react';

const ListProducts = ({products, categoryFilter}) => {
   // console.log(products);
    //console.log(categoryFilter);
    var filtered = products;

    //Do we have categories to filter on?
    if(categoryFilter.length != 0){
        var filtered = products.filter((product)=>{
            //Only want products that have the categories that are being filtered on
            return product.categories.filter((category) => {
                return categoryFilter.indexOf(category) >= 0
            }) != '' ? true : false
        });
        
    }
    console.log(filtered)
    return (
        <div className="grid-container">
            <main className="row">
                
            {filtered && filtered.length > 0 ? (
              
                filtered.map((product) => {
                   
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

export default ListProducts;