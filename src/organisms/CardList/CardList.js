import BaseCard from 'components/atoms/BaseCard/BaseCard';
import React from 'react';
// import { Row } from 'react-bootstrap';
import uuid from 'utils/uuid';

function CardList() {
  return (
    <div className="row">
      {Array.from({ length: 12 }).map(() => (
        <div key={uuid()} className="col-6 col-sm-4 col-md-3 col-lg-2 g-3">
          <BaseCard />
        </div>
      ))}
    </div>
  );
}

export default CardList;
