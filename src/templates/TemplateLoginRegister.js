import Image from 'next/image';
import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import iconArrow from 'images/fi_arrow-left.png';
import Images from 'images/bannerimg.png';
import styles from 'styles/login-register.module.css';
import Link from 'next/link';

function TemplateLoginRegister(props) {
  const { children } = props;

  return (
    <div>
      <Container fluid>
        <Row>
          <Navbar className="d-block d-md-none p-3 p-md-0">
            <Navbar.Brand bg="transparent">
              <Link href="/home">
                <Image src={iconArrow} alt="arrow-left" />
              </Link>
            </Navbar.Brand>
          </Navbar>
          <Col className="d-none d-md-block p-0">
            <div className={styles['image-container']}>
              <Image
                src={Images}
                alt="banner-login"
                layout="responsive"
                objectFit="cover"
              />
              <h2 className={styles['image-text']}>Second Hand.</h2>
            </div>
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default TemplateLoginRegister;

/* <Stack gap={5} className="p-2 p-md-5">
  <h1>
    <strong>Daftar</strong>
  </h1>
  <LoginForm />
  <div className={styles['text-redirect']}>
    Sudah punya akun? &nbsp;
    <Link href="/login">
      <strong className={styles['text-primary']} style={{ cursor: 'pointer' }}>
        Masuk di sini
      </strong>
    </Link>
  </div>
</Stack>; */
