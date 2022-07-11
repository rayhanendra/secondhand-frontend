import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { NavbarProduk, Carouselproduk } from '../../organisms';
import { BuyerBoxProduct, BoxDescProduct } from '../../components';

function halamanproduk() {
  return (
    <div>
      <NavbarProduk />
      <Container>
        <Row>
          <Col md={7}>
            <Carouselproduk />
          </Col>
          <Col md={5}>
            <BuyerBoxProduct />
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <BoxDescProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default halamanproduk;
