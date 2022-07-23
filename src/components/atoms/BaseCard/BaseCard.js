import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './BaseCard.module.css';

function BaseCard() {
  return (
    <Card className={styles.card}>
      <Card.Img
        variant="top"
        src="holder.js/100px180"
        height="100px"
        className={styles['card-img']}
      />
      <Card.Body className="p-0 mt-2">
        <Card.Title className={[styles['card-title'], 'mb-1']}>
          Jam Tangan Casio
        </Card.Title>
        <Card.Subtitle className={[styles['card-subtitle'], 'mb-2 mt-0']}>
          Aksesoris
        </Card.Subtitle>
        <Card.Text className={styles['card-text']}>Rp 250.000</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BaseCard;
