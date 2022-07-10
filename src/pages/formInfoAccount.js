/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FormikController from 'components/atoms/Formik/FormikController';
import BaseButton from 'components/atoms/BaseButton/BaseButton';
import { useDispatch } from 'react-redux';
import NavBarInfo from 'organisms/Navbar/NavBarInfo';
import styles from '../styles/formInfo.module.css';

function FormInfoAccount() {
  // const dispatch = useDispatch();

  // Initial Value Select Form
  /* eslint-disable no-unused-vars */
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };
  //

  const initialValues = {
    name: '',
    city: '',
    address: '',
    noHP: '',
    file: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Nama diperlukan!'),
    city: Yup.string().required('Kota diperlukan!'),
    address: Yup.string().required('Alamat diperlukan!'),
    noHP: Yup.number()
      .positive('Format No HP salah!')
      .min(9, 'Format No HP salah!')
      .required('No HP diperlukan!'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ formikProps }) => (
        <Form>
          <Stack gap={4}>
            <div className={styles.btnInput}>
              <FormikController
                name="file"
                control="fileinput"
                type="file"
                formikProps={formikProps}
              />
            </div>
            <FormikController
              control="input"
              type="text"
              label="Nama*"
              name="name"
              placeholder="Nama"
              formikProps={formikProps}
            />
            <FormikController
              control="select"
              type="text"
              label="Kota*"
              name="city"
              formikProps={formikProps}
              onChange={handleChange}
            >
              <option disabled selected label="Pilih Kota" value="">
                Pilih Kota
              </option>
              <option value="Kota 1" label="Kota 1">
                Kota 1
              </option>
              <option value="Kota 2" label="Kota 2">
                Kota 2
              </option>
            </FormikController>
            <FormikController
              control="textarea"
              type="text"
              label="Alamat*"
              name="address"
              placeholder="Alamat"
              formikProps={formikProps}
            />
            <FormikController
              control="input"
              type="number"
              label="No Handphone*"
              name="noHP"
              placeholder="contoh: +628123456789"
              formikProps={formikProps}
            />
            <BaseButton type="submit">Simpan</BaseButton>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default function Home() {
  return (
    <div>
      <NavBarInfo />
      <div className={styles.row}>
        <div className={styles.bagianKanan}>
          <FormInfoAccount />
        </div>
      </div>
    </div>
  );
}
