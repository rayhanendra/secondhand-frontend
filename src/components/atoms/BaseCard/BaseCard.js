import React from 'react';
import { Card } from 'react-bootstrap';
import { formatRupiah } from 'utils/formats';
import styles from './BaseCard.module.css';

function BaseCard(props) {
  const { item, onClick } = props;
  return (
    <Card className={styles.card} onClick={onClick}>
      <Card.Img
        variant="top"
        src={item?.image ?? ''}
        height="100px"
        className={styles['card-img']}
      />
      <Card.Body className="p-0 mt-2">
        <Card.Title className={[styles['card-title'], 'mb-1']}>
          {item?.name ?? 'No Data'}
        </Card.Title>
        <Card.Subtitle className={[styles['card-subtitle'], 'mb-2 mt-0']}>
          {item?.category ?? 'No Data'}
        </Card.Subtitle>
        <Card.Text className={styles['card-text']}>
          {formatRupiah(item?.price)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BaseCard;
