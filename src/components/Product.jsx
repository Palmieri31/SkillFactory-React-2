import React from 'react';

const Product = ({ product }) => (
  <div className="card">
    <img src={product.image} alt="Denim Jeans" style={{ width: 150 }} />
    <h3>{product.title}</h3>
    <p className="price">
      $
      {' '}
      {product.price}
    </p>
    <p>{product.category}</p>
  </div>
);

export default Product;
