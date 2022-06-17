import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Image from 'next/image';
import images from 'images/loginimg.png';
import styles from 'styles/login.module.css';
// import styles from '../styles/Home.module.css';

export default function Register() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Image src={images} alt="Banner" />
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
                <strong className={styles.dftrdsn}> Masuk di sini</strong>
              </h5>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
