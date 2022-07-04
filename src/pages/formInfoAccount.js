import React from 'react';
import NavBarInfo from 'organisms/Navbar/NavBarInfo';
import FormFieldInfo from '../organisms/FormFieldInfo/FormFieldInfo';
import style from '../styles/formInfo.module.css';

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
