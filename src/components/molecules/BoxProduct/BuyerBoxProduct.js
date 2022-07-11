import React from 'react';
import { Col, Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import Images8 from 'images/testi1.jpeg';
import styles from './BuyerBoxProduct.module.css';

export default function BuyerBoxProduct() {
  return (
    <Container fluid>
      <Col className={styles.rightcol1}>
        <Col className={styles.borderbox}>
          <Col>
            <h5>
              <strong>Jam Tangan Casio</strong>
            </h5>
            <p className={styles.p2}>Aksesoris</p>
            <br />
            <h6>Rp. 250.000</h6>
            <br />
            <Button className={styles.btnbuyer} type="submit">
              Tawar
            </Button>{' '}
          </Col>
        </Col>
        <br />
        <Col className={styles.rightcol2}>
          <Col className={styles.borderbox2}>
            <Image src={Images8} alt="icon-" />
            <div className="ms-3 pt-3">
              <h5>Nama Penjual</h5>
              <p className={styles.p2}>Kota</p>
            </div>
          </Col>
        </Col>
      </Col>
    </Container>
  );
}
