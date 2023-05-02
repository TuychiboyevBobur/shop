import React from "react";
import { Link } from "react-router-dom";


const Product = ({ name, image, price , id,  }) => {
  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img className="product-img" src={image} alt={name} />
        <h3>{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </Link>

      <button className="product-btn">
        <Link to="/addcard">Add to Cart</Link>
      </button>
    </div>
  )
};

export default Product;