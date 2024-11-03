import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setProducts(products.map((p) => (p.id === product.id ? product : p)));
  };

  const selectProductToEdit = (product) => {
    setCurrentProduct(product);
  };

  return (
    <div className="App">
      <h1>Product Management</h1>
      <ProductForm
        addProduct={addProduct}
        editProduct={editProduct}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        selectProductToEdit={selectProductToEdit}
      />
    </div>
  );
}

export default App;
