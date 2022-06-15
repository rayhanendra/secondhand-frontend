import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Test from 'components/atoms/Test';
import NavBar from 'organisms/Navbar/Navbar';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            <p className="fs-1">Yay, its fluid!</p>
            <Test />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
