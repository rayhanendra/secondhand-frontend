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

function FormRadio() {
  const router = useRouter();

  const initialValues = {
    picked: '',
  };

  const validationSchema = Yup.object({
    picked: Yup.string().required('Status Produk diperlukan!'),
  });

  const onSubmit = (values) => {
    const { picked } = values;
    if (picked === 'failed') {
      Swal.fire({
        title: 'Failed',
        text: 'Transaksi Gagal',
        icon: 'error',
      });
    } else {
      Swal.fire({
        title: 'Success',
        text: 'Transaksi Berhasil',
        icon: 'success',
      });
    }
    router.push('/info-penawar');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, formikProps }) => (
        <>
          <Form>
            <FormikController
              control="formikradio"
              label="Berhasil Dijual"
              name="picked"
              value="success"
              formikProps={formikProps}
            />
            <div
              style={{
                color: '#8A8A8A',
                marginLeft: '23px',
              }}
            >
              Kamu telah sepakat menjual produk ini kepada pembeli
            </div>
            <br />
            <FormikController
              control="formikradio"
              label="Batalkan Transaksi"
              name="picked"
              value="failed"
              formikProps={formikProps}
            />
            <div
              style={{
                color: '#8A8A8A',
                marginLeft: '23px',
              }}
            >
              Kamu membatalkan transaksi produk ini dengan pembeli
            </div>
            <br />
            {/* <div>Picked: {values.picked}</div> */}
            <Button
              type="submit"
              style={{
                width: '300px',
                height: '42px',
                borderRadius: '16px',
                background: '#7126b5',
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

export default function ModalPenawaran2(props) {
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
          <div className={styles.judulModal}>
            Perbarui status penjualan produkmu
          </div>
          <div className={styles.content2}>
            <FormRadio />
          </div>
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
