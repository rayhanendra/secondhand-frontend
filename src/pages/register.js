import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Image from 'next/image';
import images from 'images/bannerimg.png';
import styles from 'styles/login.module.css';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';

export default function Register() {
  return (
    <div className={styles.all_page}>
      <Container fluid>
        <Row>
          <Col className={styles.banner_text}>
            <Image
              className={styles.banner}
              src={images}
              width={700}
              height={730}
              alt="banner-login"
            />
            <h2> Second Hand.</h2>
          </Col>
          <Col className={styles.login}>
            <Form>
              <h1>
                <strong>Daftar</strong>
              </h1>
              <br />
              <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Nama </Form.Label>
                <Form.Control type="email" placeholder="Nama Lengkap" />
              </Form.Group>
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
                Daftar
              </Button>{' '}
              <br /> <br /> <br />
              <h5 className={styles.dftrlgn}>
                Sudah punya akun ? &nbsp;
                <Link href="/login">
                  <strong className={styles.dftrdsn}> Masuk di sini</strong>
                </Link>
              </h5>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
