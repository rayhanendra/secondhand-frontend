import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './FaButton.module.css';

function FaButton(props) {
  const { children } = props;
  return (
    <div className={styles['btn-container']}>
      <Button className={['btn-check:active', [styles.btn]]}>{children}</Button>
    </div>
  );
}

export default FaButton;
