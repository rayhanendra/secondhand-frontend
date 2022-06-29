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
import { Search } from 'react-bootstrap-icons';
import Image from 'next/image';
import Images1 from 'images/fi_list.png';
import Images2 from 'images/fi_bell.png';
import Images3 from 'images/fi_user.png';
import Images4 from 'images/imagelogo.png';
import Images5 from 'images/Rectangle 134.png';
import Images6 from 'images/test444.png';
import Images7 from 'images/test555.png';
import Images8 from 'images/testi1.jpeg';
import styles from 'styles/buyer-seller-page.module.css';

export default function Buyerproduct() {
  return (
    <div className={styles.all_page}>
      <Container fluid>
        {/* Awal Navbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm">
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
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Form.Group className={styles.search}>
                  <input
                    type="search"
                    placeholder="Cari di sini.."
                    aria-label="Search"
                    className={styles.formsearch}
                  />
                  <Button type="search" className={styles.btnsearch}>
                    <Search className={styles.iconsearch} />
                  </Button>
                </Form.Group>
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
        {/* Awal Carousel Left Content 1 */}
        <Row>
          <Col className={styles.leftcol1}>
            <Carousel className={styles.carousel}>
              <Carousel.Item interval={1000}>
                <Image
                  width={1000}
                  height={900}
                  src={Images5}
                  alt="First slide"
                />
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
          {/* Akhir Carousel Left Content 1 */}
          {/* Awal Right Content 1 */}
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
                  Saya tertarik dan ingin Tawar
                </Button>{' '}
              </Col>
            </Col>
            <br />
            <Col className={styles.rightcol2}>
              <Col className={styles.borderbox}>
                <Image src={Images8} alt="icon-" />
                <h5 className={styles.h5}>Nama Penjual</h5>
                <p className={styles.p1}>Kota</p>
              </Col>
            </Col>
          </Col>
        </Row>
        {/* Akhir Right Content 1 */}
        {/* Awal Left Content 2 */}
        <Row>
          <Col className={styles.leftcol2}>
            <Col className={styles.borderbox}>
              <h5>Deskripsi</h5>
              <p className={styles.p2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Col>
        </Row>
        {/* Akhir Left Content 2 */}
      </Container>
    </div>
  );
}
