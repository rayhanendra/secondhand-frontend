/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikController from 'components/atoms/Formik/FormikController';
// import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import styles from './baseModal.module.css';

function FormTawar() {
  const router = useRouter();

  const initialValues = {
    price: '',
  };

  const validationSchema = Yup.object({
    price: Yup.number().required('Harga Tawar diperlukan!'),
  });

  const onSubmit = (values) => {
    const { picked } = values;
    router.push('/buyer/halamanproduk');
    Swal.fire({
      title: 'Success',
      text: 'Harga tawarmu berhasil dikirim ke penjual',
      icon: 'success',
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ formikProps }) => (
        <>
          <Form>
            <FormikController
              control="input"
              type="number"
              label="Harga Tawar"
              name="price"
              placeholder="Rp 0,00"
              formikProps={formikProps}
            />
            <Button
              type="submit"
              style={{
                width: '300px',
                height: '42px',
                borderRadius: '16px',
                background: '#7126b5',
                marginTop: '10px',
              }}
            >
              Kirim
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default function ModalPenawaranBuyer(props) {
  return (
    <>
      <Modal
        {...props}
        dialogClassName={styles.modal}
        contentClassName={styles.modal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ border: 'none' }} closeButton />
        <Modal.Body>
          <div className={styles.judulModal}>Masukkan Harga Tawarmu</div>
          <div className={styles.smallText}>
            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </div>
          <div className={styles.content}>
            <div className={styles.normalCard}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/Rectangle33.png"
                  style={{
                    width: '48px',
                    height: '48px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginRight: '15px',
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className={styles.normalBold}>Jam Tangan</div>
                  <div className={styles.normal}>Rp. 100.000</div>
                </div>
              </div>
            </div>
          </div>
          <FormTawar />
        </Modal.Body>
        <Modal.Footer
          style={{
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '0px',
          }}
        ></Modal.Footer>
      </Modal>
    </>
  );
}
