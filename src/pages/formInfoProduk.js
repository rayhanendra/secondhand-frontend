import React from 'react';
import NavBarInfo from 'organisms/Navbar/NavBarInfo';
import FormFieldProduk from '../organisms/FormFieldProduk/FormFieldProduk'
import style from '../styles/formInfo.module.css'

export default function Home() {
  return (
    <div>
      <NavBarInfo />
      <div className={style.row}>
        <div className={style.bagianKananProduk}>
          <FormFieldProduk />
        </div> 
      </div>
    </div>
  );
}