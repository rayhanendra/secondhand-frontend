import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {CardNamaPembeli, CardPenawaranProduk} from 'components/atoms/Card/baseCard';

export default function CardPenawaran() {
  return (
    <div>
      <CardNamaPembeli />
      <h5 className='mt-4 ms-3'>Daftar Produkmu yang Ditawar</h5>
      <CardPenawaranProduk/>
    </div>
  );
}