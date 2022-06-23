import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './BaseButtonCard.module.css';

function BaseButtonCard() {
  return (
    <div className={styles['button-card']}>
      <FontAwesomeIcon icon={faPlus} />
      <p>Tambah Produk</p>
    </div>
  );
}

export default BaseButtonCard;
