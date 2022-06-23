import React from 'react';
import {CardNamaPembeli, CardPenawaranProduk} from 'components/atoms/Card/baseCard';
import styles from './cardPenawaran.module.css';
import style from '../../components/atoms/BaseButton/BaseButton.module.css';
import {ArrowLeft} from 'react-bootstrap-icons';

export default function CardPenawaran() {
  return (
    <div>
      <button className={style.backButton}>
        <ArrowLeft size={30} color='#151515'/>
      </button>
      <div className={styles.cardAtas}>
        <CardNamaPembeli/>
      </div>
      <div className={styles.cardBawah}>
        <CardPenawaranProduk/>
      </div>
    </div>
  );
}