import BaseButtonCard from 'components/atoms/BaseButtonCard/BaseButtonCard';
import BaseCard from 'components/atoms/BaseCard/BaseCard';
import React from 'react';
import uuid from 'utils/uuid';

const data = [];

function ProductCard() {
  return (
    <div className="row">
      <div key={uuid()} className="col-6 col-sm-4 g-3">
        <BaseButtonCard />
      </div>
      {Array.from({ length: 12 }).map(() => (
        <div key={uuid()} className="col-6 col-sm-4 g-3">
          <BaseCard />
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
