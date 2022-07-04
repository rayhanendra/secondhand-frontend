import BaseButton from 'components/atoms/BaseButton/BaseButton';
import React from 'react';
// import Image from 'next/image';
import styles from './AccountBox.module.css';

function AccountBox() {
  return (
    <div className={styles['account-container']}>
      {/* <Image src="" /> */}
      <div className="d-flex align-items-center gap-3">
        <div className={styles.image} />
        <div>
          <div className={styles.name}>Nama Penjual</div>
          <div className={styles.city}>Kota</div>
        </div>
      </div>
      <BaseButton variant="outlined">Edit</BaseButton>
    </div>
  );
}

export default AccountBox;
