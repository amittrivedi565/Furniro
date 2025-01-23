import React from 'react';
import ItemCard from './item-card';

const Items = ({Products}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {Products.map(product => (
          <div className="col-md-4 d-flex justify-content-center mb-4" key={product.name}>
            <ItemCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;