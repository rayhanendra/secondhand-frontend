import { React } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './BaseButton.module.css';

function BaseButton(props) {
  const {
    variant = 'primary',
    type = 'submit',
    active,
    children,
    disabled = false,
  } = props;

  return (
    <Button
      type={type}
      active={active}
      className={[
        [styles.btn],
        [variant === 'primary' && styles.primary],
        [variant === 'secondary' && styles.light],
        [variant === 'outlined' && styles.outlined],
        [variant === 'produk' && styles.btnProduk],
        [variant === 'produkOutlined' && styles.produkOutlined],
        [active && styles.primary],
        'btn-check:active',
      ]}
      disabled={disabled}
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
      className={[
        styles.buttonLarge,
        variant === 'primary' ? styles.primary : '',
      ]}
    >
      {children}
    </Button>
  );
}

export function ButtonMedium(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[
        styles.buttonMedium,
        variant === 'primary' ? styles.primary : '',
      ]}
    >
      {children}
    </Button>
  );
}

export function ButtonMediumOutline(props) {
  const { variant = 'outline', children } = props;

  return (
    <Button
      className={[
        styles.buttonMedium,
        variant === 'outline' ? styles.outline : '',
      ]}
    >
      {children}
    </Button>
  );
}

export function ImageButton(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[
        styles.imageButton,
        variant === 'primary' ? styles.primary : '',
      ]}
    >
      {children}
    </Button>
  );
}

export function ButtonCard(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[
        styles.buttonCard,
        variant === 'primary' ? styles.primary : '',
      ]}
    >
      {children}
    </Button>
  );
}

export function ButtonCardOutline(props) {
  const { variant = 'outline', children } = props;

  return (
    <Button
      className={[
        styles.buttonCard,
        variant === 'outline' ? styles.outline : '',
      ]}
    >
      {children}
    </Button>
  );
}

export function ButtonCardOutlineStatus(props) {
  const { variant = 'outline', children } = props;

  return (
    <Button
      className={[
        styles.buttonCard,
        variant === 'outline' ? styles.outline : '',
      ]}
    >
      {children}
    </Button>
  );
}

export function ButtonCardNoModal(props) {
  const { variant = 'primary', children } = props;
  return (
    <Button
      className={[
        styles.buttonCard,
        variant === 'primary' ? styles.primary : '',
      ]}
    >
      {children}
    </Button>
  );
}
