import React from 'react';
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Nav,
  Navbar,
  Carousel,
} from 'react-bootstrap';
import Image from 'next/image';
import Images1 from 'images/fi_list.png';
import Images2 from 'images/fi_bell.png';
import Images3 from 'images/fi_user.png';
import Images4 from 'images/imagelogo.png';
import Images5 from 'images/Rectangle 134.png';
import Images6 from 'images/test44.png';
import Images7 from 'images/test55.png';
import Images8 from 'images/Rectangle 33.png';
import styles from 'styles/product_info.module.css';

export default function Sellerproduct() {
  return (
    <div className={styles.all_page}>
      <Container fluid>
        <Row>
          {/* Awal Navbar */}
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                <Image
                  className={styles.nav_logo}
                  width={100}
                  height={50}
                  src={Images4}
                  alt="icon-"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Cari di sini ..."
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Nav>
                <Nav className="justify-content-end">
                  <Navbar.Brand>
                    <Image src={Images1} alt="icon-" />
                  </Navbar.Brand>
                  <Navbar.Brand>
                    <Image src={Images2} alt="icon-" />
                  </Navbar.Brand>
                  <Navbar.Brand>
                    <Image src={Images3} alt="icon-" />
                  </Navbar.Brand>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* Akhir Navbar */}

          {/* Awal Carousel */}
          <Col>
            <Carousel className={styles.col}>
              <Carousel.Item interval={1000}>
                <Image
                  className="d-block w-800"
                  src={Images5}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Image
                  className="d-block w-100 rounded-3"
                  src={Images6}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Image
                  className="d-block w-100 rounded-3"
                  src={Images7}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* Akhir Navbar */}
          <Col className={styles.info_product}>
            <h3>
              <strong>Jam Tangan Casio</strong>
            </h3>
            <h4>Aksesoris</h4>
            <br />
            <h3>Rp. 250.000</h3>
            <br />
            <Button className={styles.btnlogin} type="submit">
              Terbitkan
            </Button>{' '}
            <br /> <br />
            <Button className={styles.btnlogin} type="submit">
              Edit
            </Button>{' '}
          </Col>
        </Row>
        <Row>
          <Col className={styles.info_product}>
            <h5>Deskripsi</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col className={styles.info_product}>
            <Image className={styles.info_product} src={Images8} alt="icon-" />
            <h3>Nama Penjual</h3>
            <h4>Kota</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
