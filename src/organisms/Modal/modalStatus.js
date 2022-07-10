import { React, useState } from 'react';
import { Modal, Alert, Button, Form, Stack } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import FormikController from 'components/atoms/Formik/FormikController';
import { useDispatch } from 'react-redux';
import styles from './baseModal.module.css';
import RadioForm from 'components/atoms/Formik/FormikInput/FormikRadio';

function FormRadio() {
  const dispatch = useDispatch();

  const initialValues = {
    picked: '',
  };

  const validationSchema = Yup.object({
    picked: Yup.string().required('Nama Produk diperlukan!'),
  });

  // const onSubmit = (values) => {
  //   console.log('Form data', values);
  // };

  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  const [show, setShow] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => <RadioForm />}
    </Formik>
  );
}

export default function ModalPenawaran2(props) {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  if (show) {
    return (
      <>
        <Alert
          variant="success"
          onClose={() => {
            setShow(false);
          }}
          dismissible
          style={{
            zIndex: '1',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p>Status Produk Berhasil Diperbarui</p>
        </Alert>
      </>
    );
  } else {
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
          >
            {/* <AlertSuccess/> */}
            <Button
              type="submit"
              style={{
                width: '20vw',
                height: '42px',
                borderRadius: '16px',
                background: '#7126b5',
              }}
              onClick={() => {
                setShow(true);
              }}
            >
              Kirim
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
