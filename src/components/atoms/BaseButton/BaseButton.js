import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './BaseButton.module.css';

function BaseButton(props) {
  const { variant = 'primary', active, children } = props;

  return (
    <Button
      active={active}
      className={[
        [styles.btn],
        [variant === 'primary' && styles.primary],
        [variant === 'secondary' && styles.light],
        [active && styles.primary],
        'btn-check:active',
      ]}
    >
      {children}
    </Button>
  );
}

export default BaseButton;
