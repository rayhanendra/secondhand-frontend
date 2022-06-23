import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBarInfo from 'organisms/NavBar/NavBarInfo';
import {ArrowLeftCircle} from 'react-bootstrap-icons'
import FormFieldInfo from '../organisms/FormFieldInfo/FormFieldInfo'
import styles from '../components/atoms/BaseButton/BaseButton.module.css';
import style from './formInfoAccount.module.css'
// import styles from '../styles/Home.module.css';

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
        <Col lg={9} sm={12} md={12} className={style.bagianKanan}>
          <FormFieldInfo />
        </Col>
      </Row>
    </div>
  );
}