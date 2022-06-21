import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBarInfo from 'organisms/Navbar/NavBarInfo';
import {ArrowLeft} from 'react-bootstrap-icons';
import styles from '../components/atoms/BaseButton/BaseButton.module.css';
import style from '../styles/formInfo.module.css';
import CardPenawaran from '../organisms/CardPenawaran/cardPenawaran';

export default function Home() {
  return (
    <div>
      <NavBarInfo />
      <Row className={style.row}>
        <Col xl={3} lg={3} sm={0} md={0} className={style.bagianKiri}> 
          <button className={styles.backButton}>
            <ArrowLeft size={30} color='#151515'/>
          </button>
        </Col>
        <Col xl={9} lg={9} sm={12} md={12} className={style.bagianKananPenawar}>
          <CardPenawaran/>
        </Col> 
      </Row>
    </div>
  );
}