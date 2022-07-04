import React from 'react';
import styles from './CardMobile.module.css';

function CardMobile(props) {
  const { item, type = 'diminati' } = props;

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
              <div className="flex-grow-1">
                {type === 'diminati' ? 'Penawaran Produk' : 'Produk Terjual'}
              </div>
              <div className="flex-grow-0">{item?.offerDate}</div>
            </div>
          </div>
          <div className={styles.body}>
            <div>{item?.title}</div>
            <div>Rp {item?.price}</div>
            <div>Ditawar Rp {item?.offerPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMobile;
