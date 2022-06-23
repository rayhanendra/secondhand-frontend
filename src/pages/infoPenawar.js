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
      <div className={style.row}>
        <div className={style.bagianKananPenawar}>
          <CardPenawaran/>
        </div> 
      </div>
    </div>
  );
}