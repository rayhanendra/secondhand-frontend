import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, SelectField,TextAreaField,FileField } from '../../components/atoms/FormInput/FormInput';
import * as Yup from 'yup';
import styles from './FormFieldInfo.module.css';
import {ButtonLarge} from 'components/atoms/BaseButton/BaseButton';

export const FormFieldInfo = () => {
  const validate = Yup.object({
    nama: Yup.string()
      .min(6, 'Must be 6 characters or less')
      .required('Nama perlu diisi!'),
    kota: Yup.string()
      .required('Kota perlu diisi!'),
    alamat: Yup.string()
      .required('alamat perlu diisi!'),
    noHp: Yup.string()
      .required('No HP perlu diisi!'),
    file: Yup.string()
      .required('Unggah foto diperlukan!'),
  })
  return (
    <Formik
      initialValues={{
        nama: '',
        kota: '',
        alamat: '',
        noHp: '',
        file: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <Form className={styles.formField}>
            <FileField name="file"/>
            <TextField label="Nama" name="nama" type="text"/>
            <SelectField label="Kota" name="kota" type="text" />
            <TextAreaField label="Alamat" name="alamat" type="text" />
            <TextField label="No HP" name="noHP" type="number" />
            <ButtonLarge>Simpan</ButtonLarge>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default FormFieldInfo;