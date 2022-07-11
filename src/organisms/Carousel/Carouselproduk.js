import React from 'react';
import { Carousel, Col, Container } from 'react-bootstrap';
import Image from 'next/image';
import Images5 from 'images/Rectangle 134.png';
import Images6 from 'images/test444.png';
import Images7 from 'images/test555.png';
import styles from './Carouselproduk.module.css';

function Carouselproduk() {
  return (
    <Container fluid>
      <Col className={styles.leftcol1}>
        <Carousel className={styles.carousel}>
          <Carousel.Item interval={1000}>
            <Image width={1000} height={900} src={Images5} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Image
              className="rounded-3"
              width={1000}
              height={900}
              src={Images6}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Image
              className="rounded-3"
              width={1000}
              height={900}
              src={Images7}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Container>
  );
}

export default Carouselproduk;
