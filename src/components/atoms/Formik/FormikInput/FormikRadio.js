import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './FormikInput.module.css';

export default function RadioForm() {
  const [item, setItem] = useState({ kindOfStand: '', another: 'another' });

  const { kindOfStand } = item;

  const handleChange = (e) => {
    e.persist();

    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group controlId="kindOfStand">
        <Form.Check
          value="BerhasilTerjual"
          type="radio"
          aria-label="radio 1"
          label="Berhasil Terjual"
          onChange={handleChange}
          checked={kindOfStand === 'BerhasilTerjual'}
        />
        <div className={styles.teksModal}>
          Kamu telah sepakat menjual produk ini kepada pembeli
        </div>
        <Form.Check
          value="BatalkanTransaksi"
          type="radio"
          aria-label="radio 2"
          label="Batalkan Transaksi"
          onChange={handleChange}
          checked={kindOfStand === 'BatalkanTransaksi'}
        />
        <div className={styles.teksModal}>
          Kamu membatalkan transaksi produk ini dengan pembeli
        </div>
      </Form.Group>
    </form>
  );
}
