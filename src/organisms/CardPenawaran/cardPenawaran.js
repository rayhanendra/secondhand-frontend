import React from 'react';
import {
  CardNamaPembeli,
  CardPenawaranProduk,
  CardPenawaranProdukAcc,
} from 'components/atoms/Card/baseCard';
import { ArrowLeft } from 'react-bootstrap-icons';
import styles from './cardPenawaran.module.css';
import style from '../../components/atoms/BaseButton/BaseButton.module.css';

export default function CardPenawaran() {
  return (
    <div>
      <button type="button" className={style.backButton}>
        <ArrowLeft size={30} color="#151515" />
      </button>
      <div className={styles.cardAtas}>
        <CardNamaPembeli />
      </div>
      <div className={styles.cardBawah}>
        <CardPenawaranProduk />
      </div>
      <div className={styles.cardAtas}>
        <CardNamaPembeli />
      </div>
      <div className={styles.cardBawah}>
        <CardPenawaranProdukAcc />
      </div>
    </div>
  );
}
