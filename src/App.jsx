/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Catalogue from './components/Catalogue';

function App() {
  const [products, saveProducts] = useState([]);
  const [consult, saveConsult] = useState(true);
  const [product, saveProduct] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  const updateState = (e) => {
    saveProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const createNewProduct = (e) => {
    e.preventDefault();
    saveProduct(products.push(product));
  };

  useEffect(() => {
    if (consult) {
      const consultAPI = () => {
        axios.get('https://fakestoreapi.com/products')
          .then((response) => {
            saveProducts(response.data);

            saveConsult(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      consultAPI();
    }
  }, [consult]);

  return (
    <>
      <div className="App">
        <h1>Agregar productos</h1>
        <form className="formulario" onSubmit={createNewProduct}>
          <div className="input">
            <label htmlFor="id">Ingrese id </label>
            <input type="number" placeholder="Ingrese id producto" id="id" name="id" onChange={updateState} />
          </div>
          <div className="input">
            <label htmlFor="title">Ingrese Producto </label>
            <input type="text" placeholder="Ingrese producto" id="title" name="title" onChange={updateState} />
          </div>
          <div className="input">
            <label htmlFor="price">Ingrese precio </label>
            <input type="number" placeholder="Ingrese precio" id="price" name="price" onChange={updateState} />
          </div>
          <div className="input">
            <label htmlFor="description">Ingrese decripcion </label>
            <input type="text" placeholder="Ingrese descripcion" id="description" name="description" onChange={updateState} />
          </div>
          <div className="input">
            <label htmlFor="category">Ingrese categoria </label>
            <input type="text" placeholder="Ingrese categoria" id="category" name="category" onChange={updateState} />
          </div>
          <div className="input">
            <label htmlFor="image">Ingrese imagen </label>
            <input type="text" placeholder="Ingrese imagen" id="image" name="image" onChange={updateState} />
          </div>
          <input type="submit" value="Crear Producto" />
        </form>
      </div>
      <div className="App">
        <h2> Catalogo de Productos</h2>
        <Catalogue products={products} />
      </div>
    </>
  );
}

export default App;
