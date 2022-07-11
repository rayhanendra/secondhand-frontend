import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextField,
  SelectField,
  TextAreaField,
  FileFieldOutline,
} from '../../components/atoms/FormInput/FormInput';
import * as Yup from 'yup';
import styles from './FormFieldProduk.module.css';
import style from '../../components/atoms/BaseButton/BaseButton.module.css';
import {
  ButtonMedium,
  ButtonMediumOutline,
} from 'components/atoms/BaseButton/BaseButton';
import { Col, Row } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

export const FormFieldInfo = () => {
  const validate = Yup.object({
    namaProduk: Yup.string()
      .min(6, 'Must be 6 characters or less')
      .required('Nama Produk perlu diisi!'),
    kategoriProduk: Yup.string().required('Kategori Produk perlu diisi!'),
    hargaProduk: Yup.string().required('Harga Produk perlu diisi!'),
    deskripsiProduk: Yup.string().required('Deskripsi Produk perlu diisi!'),
    file: Yup.string().required('Unggah foto diperlukan!'),
  });
  return (
    <Formik
      initialValues={{
        nama: '',
        kategoriProduk: '',
        deskripsiProduk: '',
        hargaProduk: '',
        file: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <Form className={styles.formField}>
            <button className={style.backButton}>
              <ArrowLeft size={30} color="#151515" />
            </button>
            <div className={styles.form}>
              <TextField label="Nama Produk" name="namaProduk" type="text" />
              <SelectField label="Kategori" name="kategoriProduk" type="text" />
              <TextField
                label="Harga Produk"
                name="hargaProduk"
                type="number"
              />
              <TextAreaField
                label="Deskripsi"
                name="deskripsiProduk"
                type="text"
              />
              <div className={styles.buttonFile}>
                <FileFieldOutline name="file" />
              </div>
            </div>
            <div className={styles.buttonSubmit}>
              <ButtonMediumOutline>Preview</ButtonMediumOutline>
              <ButtonMedium>Terbitkan</ButtonMedium>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default FormFieldInfo;