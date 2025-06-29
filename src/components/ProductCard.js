import React from 'react';
import './ProductCard.css';

function ProductCard ({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.type}</p>
      <p className="price">¥{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
