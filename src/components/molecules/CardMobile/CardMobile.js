import React from 'react';
import styles from './CardMobile.module.css';

function CardMobile() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image} />
        <div className="d-flex flex-column g-2 flex-grow-1">
          <div className={styles.desc}>
            <div
              className={[
                'd-flex flex-row justify-content-between flex-grow-1',
                styles.body,
              ]}
            >
              <div className="flex-grow-1">Penawaran produk</div>
              <div className="flex-grow-0">20 Apr, 14:04</div>
            </div>
          </div>
          <div className={styles.body}>
            <div>Jam Tangan Casio</div>
            <div>Rp 250.000</div>
            <div>Ditawar Rp 200.000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMobile;
