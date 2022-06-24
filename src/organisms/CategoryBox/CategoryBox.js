import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faDollarSign,
  faHeart,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './CategoryBox.module.css';

function CategoryBox() {
  return (
    <div className={styles['category-box']}>
      <div className={styles.title}>Kategori</div>
      <div className="d-flex flex-column gap-3 w-100">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <FontAwesomeIcon icon={faBox} />
            <div>Semua Produk</div>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="border-bottom" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <FontAwesomeIcon icon={faHeart} />
            <div>Diminati</div>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="border-bottom" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <FontAwesomeIcon icon={faDollarSign} />
            <div>Terjual</div>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
