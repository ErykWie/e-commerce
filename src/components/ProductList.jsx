import React from 'react';

function ProductList({ products, deleteProduct, selectProductToEdit }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>
              {product.name} - ${product.price}
            </span>
            <div>
              <button onClick={() => selectProductToEdit(product)}>Edit</button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
