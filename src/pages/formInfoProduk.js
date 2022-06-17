import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBarInfo from 'organisms/Navbar/NavBarInfo';
import {ArrowLeftCircle} from 'react-bootstrap-icons'
import FormFieldProduk from '../organisms/FormFieldProduk/FormFieldProduk'
import styles from '../components/atoms/BaseButton/BaseButton.module.css';
import style from './formInfo.module.css'

export default function Home() {
  return (
    <div>
      <NavBarInfo />
      <Row className={style.row}>
        <Col lg={3} sm={0} md={0} className={style.bagianKiri}> 
          <button className={styles.backButton}>
            <ArrowLeftCircle size={30} color='#151515'/>
          </button>
        </Col>
        <Col lg={9} sm={12} md={12} className={style.bagianKananProduk}>
          <FormFieldProduk />
        </Col> 
      </Row>
    </div>
  );
}