import CardMobile from 'components/molecules/CardMobile/CardMobile';
import React from 'react';

function ProductListMobile() {
  return (
    <div className="d-flex flex-column">
      <CardMobile />
      <CardMobile />
      <CardMobile />
    </div>
  );
}

export default ProductListMobile;
