import React, { useState, useEffect } from 'react';

function ProductForm({
  addProduct,
  editProduct,
  currentProduct,
  setCurrentProduct,
}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name);
      setPrice(currentProduct.price);
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price };

    if (currentProduct) {
      editProduct({ ...product, id: currentProduct.id });
      setCurrentProduct(null);
    } else {
      addProduct(product);
    }

    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentProduct ? 'Edit Product' : 'Add Product'}</h2>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          min="0"
          step="0.01"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">
        {currentProduct ? 'Save Changes' : 'Add Product'}
      </button>
    </form>
  );
}

export default ProductForm;
