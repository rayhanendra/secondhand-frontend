import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBarInfo from 'organisms/Navbar/NavBarInfo';
import {ArrowLeft} from 'react-bootstrap-icons'
import FormFieldInfo from '../organisms/FormFieldInfo/FormFieldInfo'
import style from '../styles/formInfo.module.css'

export default function Home() {
  return (
    <div>
      <NavBarInfo />
      <div className={style.row}>
        <div className={style.bagianKanan}>
          <FormFieldInfo />
        </div>
      </div>
    </div>
  );
}