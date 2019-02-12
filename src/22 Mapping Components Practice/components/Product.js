import React from 'react';
import './Product.css';

function Product(props) {
  return (
    <div className='item'>
      <h3>{props.product.name}</h3>
      <p>{props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})} - {props.product.description}</p>
    </div>
  )
}

export default Product;