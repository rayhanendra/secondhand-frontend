import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './BaseButton.module.css';
import {ArrowLeftCircle} from 'react-bootstrap-icons'

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

export function ButtonLarge(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[styles.buttonLarge, variant === 'primary' ? styles.primary : '']}
    >
      {children}
    </Button>
  );
}

export function ImageButton(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[styles.imageButton, variant === 'primary' ? styles.primary : '']}
    >
      {children}
    </Button>
  );
}