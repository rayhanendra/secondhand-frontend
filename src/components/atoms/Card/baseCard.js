import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './baseCard.module.css';
import { ButtonCard, ButtonCardOutline, ButtonCardOutlineStatus } from '../BaseButton/BaseButton';
import {Whatsapp} from 'react-bootstrap-icons';

export function CardNamaPembeli() {
  return (
  <div className={styles.card}>
    <div className={styles.leftContent}>
      <Card.Img variant="top" src="/potrait.jpg" className={styles.foto} />
    </div>
    <div className='ps-0'>
      <p className={styles.boldText}>Nama Pembeli</p>
      <p className={styles.smallText}>Kota</p>
    </div>
  </div>
  );
}
export default CardNamaPembeli;

export function CardPenawaranProduk() {
  return (
  <div>
    <div className={styles.textTengah}>
      <div>Daftar Produkmu yang Ditawar</div>
    </div>
    <div className={styles.cardNoBorder}>
      <div className={styles.leftContent}>
        <Card.Img variant="top" src="/watch.webp" className={styles.foto} />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.title}>
          <p className={styles.smallText}>Penawaran produk</p>
          <p className={styles.smallTime}>20 April 14.04</p>
        </div>
        <div className={styles.content}>
          <p className={styles.mediumText}>Jam Tangan Casio</p>
          <p className={styles.mediumText}>Rp. 250.000</p>
          <p className={styles.mediumText}>Ditawar Rp. 200.000</p>
        </div>
        <div className={styles.button}>
          <ButtonCardOutline>Tolak</ButtonCardOutline>
          <ButtonCard>Terima</ButtonCard>
        </div>
      </div>
    </div>
    <hr/>
  </div>
  );
}

export function CardPenawaranProdukAcc() {
  return (
  <div>
    <div className={styles.textTengah}>
      <div>Daftar Produkmu yang Ditawar</div>
    </div>
    <div className={styles.cardNoBorder}>
      <div className={styles.leftContent}>
        <Card.Img variant="top" src="/watch.webp" className={styles.foto} />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.title}>
          <p className={styles.smallText}>Penawaran produk</p>
          <p className={styles.smallTime}>20 April 14.04</p>
        </div>
        <div className={styles.content}>
          <p className={styles.mediumText}>Jam Tangan Casio</p>
          <p className={styles.mediumText}>Rp. 250.000</p>
          <p className={styles.mediumText}>Ditawar Rp. 200.000</p>
        </div>
        <div className={styles.button}>
          <ButtonCardOutlineStatus>Status</ButtonCardOutlineStatus>
          <ButtonCard>
            <div>
              Hubungi Via &nbsp;
              <Whatsapp /> 
            </div>
          </ButtonCard>
        </div>
      </div>
    </div>
    <hr style={{marginBottom: "32px"}}/>
  </div>
  );
}