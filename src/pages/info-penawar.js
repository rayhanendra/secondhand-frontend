import React from 'react';
import NavBarInfo from 'organisms/NavBar/NavBarInfo';
// import { AlertText } from 'organisms/Modal/modalStatus';
import style from '../styles/info-produk.module.css';
import CardPenawaran from '../organisms/CardPenawaran/cardPenawaran';

export default function Home() {
  return (
    <>
      <div>
        <NavBarInfo />
        <div className={style.row}>
          <div className={style.bagianKananPenawar}>
            <CardPenawaran />
          </div>
        </div>
      </div>
      {/* <AlertText/> */}
    </>
  );
}
