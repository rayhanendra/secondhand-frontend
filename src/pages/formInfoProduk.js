/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FormikController from 'components/atoms/Formik/FormikController';
import BaseButton, {
  ButtonMedium,
  ButtonMediumOutline,
} from 'components/atoms/BaseButton/BaseButton';
import { useDispatch } from 'react-redux';
import NavBarInfo from 'organisms/Navbar/NavBarInfo';
import styles from '../styles/formInfo.module.css';

function FormInfoAccount() {
  const dispatch = useDispatch();

  // Initial Value Select Form
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };
  //

  const initialValues = {
    productName: '',
    category: '',
    description: '',
    productPrice: '',
    file: '',
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required('Nama Produk diperlukan!'),
    category: Yup.string().required('Kategori diperlukan!'),
    description: Yup.string().required('Deskripsi Produk diperlukan!'),
    productPrice: Yup.number()
      .positive('Format Harga Produk salah!')
      .required('Harga Produk diperlukan!'),
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
            <FormikController
              control="input"
              type="text"
              label="Nama Produk*"
              name="productName"
              placeholder="Nama Produk"
              formikProps={formikProps}
            />
            <FormikController
              control="input"
              type="number"
              label="Harga Produk*"
              name="productPrice"
              placeholder="Rp. 0,00"
              formikProps={formikProps}
            />
            <FormikController
              control="select"
              type="text"
              label="Kategori*"
              name="category"
              formikProps={formikProps}
              onChange={handleChange}
            >
              <option disabled selected label="Pilih Kategori" value="">
                Pilih Kategori
              </option>
              <option value="Kategori1" label="Kategori 1">
                Kategori 1
              </option>
              <option value="Kategori2" label="Kategori 2">
                Kategori 2
              </option>
            </FormikController>
            <FormikController
              control="textarea"
              type="text"
              label="Deskripsi Produk*"
              name="description"
              placeholder="Deskripsi Produk"
              formikProps={formikProps}
            />
            <div>
              <FormikController
                name="file"
                control="fileinput"
                type="file"
                formikProps={formikProps}
                variant="outlined"
              />
            </div>
            <div className={styles.btnProduk}>
              <ButtonMediumOutline>Preview</ButtonMediumOutline>
              <ButtonMedium>Terbitkan</ButtonMedium>
            </div>
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
