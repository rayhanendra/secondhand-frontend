import CardMobile from 'components/molecules/CardMobile/CardMobile';
import React from 'react';
import uuid from 'utils/uuid';

function ProductListMobile() {
  const productData = [
    {
      image: '',
      offerDate: '20 Apr, 14:04',
      title: 'Jam Tangan Casio',
      price: 250000,
      offerPrice: 200000,
    },
    {
      image: '',
      offerDate: '20 Apr, 14:04',
      title: 'Jam Tangan Casio',
      price: 250000,
      offerPrice: 200000,
    },
    {
      image: '',
      offerDate: '20 Apr, 14:04',
      title: 'Jam Tangan Casio',
      price: 250000,
      offerPrice: 200000,
    },
  ];

  return (
    <div className="d-flex flex-column">
      {productData.map((item) => (
        <CardMobile key={uuid()} item={item} type="diminati" />
      ))}
    </div>
  );
}

export default ProductListMobile;
