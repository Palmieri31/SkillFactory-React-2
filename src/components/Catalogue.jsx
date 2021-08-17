import React from 'react';
import '../App.css';

/* Componentes */
import Product from './Product';

const Catalogue = ({ products }) => (
  <div className="container">
    {
        products.map((product) => <Product key={product.id} product={product} />)
    }
  </div>
);

export default Catalogue;
