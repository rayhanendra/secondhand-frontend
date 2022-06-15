import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './BaseButton.module.css';

function BaseButton(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[styles.button, variant === 'primary' ? styles.primary : '']}
    >
      {children}
    </Button>
  );
}

export default BaseButton;
