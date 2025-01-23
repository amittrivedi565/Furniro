import React from 'react';
import ItemCard from './item-card';

const Items = ({ Products }) => {
  return (
    <div className="container">
      <div className="row">
        {Products.map((product, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center mb-4" key={index}>
            <ItemCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
