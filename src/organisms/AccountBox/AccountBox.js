import BaseButton from 'components/atoms/BaseButton/BaseButton';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
// import Image from 'next/image';
import styles from './AccountBox.module.css';

function AccountBox() {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={styles['account-container']}>
      {/* <Image src="" /> */}
      <div className="d-flex align-items-center gap-3">
        <div className={styles.image} />
        <div>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.city}>{user.city}</div>
        </div>
      </div>
      <span
        onClick={() => router.push('/profil')}
        onKeyDown={() => router.push('/profil')}
        role="link"
        tabIndex={0}
      >
        <BaseButton variant="outlined">Edit</BaseButton>
      </span>
    </div>
  );
}

export default AccountBox;
