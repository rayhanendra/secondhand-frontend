import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ButtonLarge } from 'components/atoms/BaseButton/BaseButton';
import { ArrowLeft } from 'react-bootstrap-icons';
import {
  TextField,
  SelectField,
  TextAreaField,
  FileField,
} from '../../components/atoms/FormInput/FormInput';
import styles from './FormFieldInfo.module.css';
import style from '../../components/atoms/BaseButton/BaseButton.module.css';

export default function FormFieldInfo() {
  const validate = Yup.object({
    nama: Yup.string()
      .min(6, 'Must be 6 characters or less')
      .required('Nama perlu diisi!'),
    kota: Yup.string().required('Kota perlu diisi!'),
    alamat: Yup.string().required('alamat perlu diisi!'),
    noHp: Yup.string().required('No HP perlu diisi!'),
    file: Yup.string().required('Unggah foto diperlukan!'),
  });
  return (
    <Formik
      initialValues={{
        nama: '',
        kota: '',
        alamat: '',
        noHp: '',
        file: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <div>
          <Form className={styles.formField}>
            <div className={styles.buttonFile}>
              <FileField name="file" />
            </div>
            <button type="button" className={style.backButton}>
              <ArrowLeft size={30} color="#151515" />
            </button>
            <div className={styles.form}>
              <TextField label="Nama" name="nama" type="text" />
              <SelectField label="Kota" name="kota" type="text" />
              <TextAreaField label="Alamat" name="alamat" type="text" />
              <TextField label="No HP" name="noHP" type="number" />
              <ButtonLarge>Simpan</ButtonLarge>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
