import React from "react";

const Product = ({ name, image, price }) => {
  return (
    <div className="product">
      <img className="product-img" src={image} alt={name} />
      <h3>{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
      <button className="product-btn">Add to Cart</button>
    </div>
  );
};

export default Product;