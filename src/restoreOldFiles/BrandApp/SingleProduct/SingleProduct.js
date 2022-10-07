import React from "react";
import "./single.css";

const SingleProduct = ({ products }) => {
//   console.log(products);

  return (
    <>
      <h1>Create a single Post </h1>

    
        <div>
          <img src={products.image} alt=" gucci-shoe" />
          
          <div className="product-info">
            <h1>{products.name}</h1>
            <h2>$ {products.price}</h2>
            <p>{products.description}</p>
            
          </div>
        </div>
      
    </>
  );
};

export default SingleProduct;
