import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from 'organisms/Navbar/Navbar';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            <h5>Belum Punya Akun ? Daftar disini</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
