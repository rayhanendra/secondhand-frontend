import React from 'react';
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Nav,
  Navbar,
} from 'react-bootstrap';
// import { Search } from "react-bootstrap-icons";
import Image from 'next/image';
import Images from 'images/bannerimg.png';
import images1 from 'images/bluetooth.png';
import images2 from 'images/vibrate.png';
import images3 from 'images/wifi.png';
import images4 from 'images/cellular.png';
import images5 from 'images/battery.png';
import images6 from 'images/fi_arrow-left.png';
import styles from 'styles/login-register.module.css';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.all_page}>
      <Container fluid>
        <Row>
          {/* Awal Nav-Responsive */}
          <Navbar className={styles.nav_responsive} bg="light" variant="light">
            <Container>
              <Navbar.Brand>3:19</Navbar.Brand>
              <Nav className="me-right">
                <Navbar.Brand>
                  <Image src={images1} alt="icon-" />
                </Navbar.Brand>
                <Navbar.Brand>
                  <Image src={images2} alt="icon-" />
                </Navbar.Brand>
                <Navbar.Brand>
                  <Image src={images3} alt="icon-" />
                </Navbar.Brand>
                <Navbar.Brand>
                  <Image src={images4} alt="icon-" />
                </Navbar.Brand>
                <Navbar.Brand>
                  <Image src={images5} alt="icon-" />
                </Navbar.Brand>
                <Navbar.Brand>59%</Navbar.Brand>
              </Nav>
            </Container>
          </Navbar>
          <Navbar>
            <Container>
              <Navbar.Brand bg="transparent" className={styles.arrow_icons}>
                <Link href="/home">
                  <Image src={images6} alt="arrow-left" />
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
          {/* Akhir Nav-Responsive */}

          <Col className={styles.banner_text}>
            <Image
              className={styles.banner}
              src={Images}
              width={700}
              height={730}
              layout="responsive"
              alt="banner-login"
            />
            <h2> Second Hand.</h2>
          </Col>
          <Col className={styles.login}>
            <Form>
              <h1>
                <strong>Masuk</strong>
              </h1>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Contoh: johndee@gmail.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password" />
              </Form.Group>
              <br />
              <Button className={styles.btnlogin} type="submit">
                Masuk
              </Button>{' '}
              <br /> <br /> <br />
              <h5 className={styles.dftrlgn}>
                Belum punya akun ? &nbsp;
                <Link href="/register">
                  <strong className={styles.dftrdsn}> Daftar di sini</strong>
                </Link>
              </h5>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
