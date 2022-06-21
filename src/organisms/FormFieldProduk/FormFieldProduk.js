import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, SelectField,TextAreaField,FileFieldOutline } from '../../components/atoms/FormInput/FormInput';
import * as Yup from 'yup';
import styles from './FormFieldProduk.module.css';
import {ButtonMedium, ButtonMediumOutline} from 'components/atoms/BaseButton/BaseButton';
import { Col, Row } from 'react-bootstrap';

export const FormFieldInfo = () => {
  const validate = Yup.object({
    namaProduk: Yup.string()
      .min(6, 'Must be 6 characters or less')
      .required('Nama Produk perlu diisi!'),
    kategoriProduk: Yup.string()
      .required('Kategori Produk perlu diisi!'),
    hargaProduk: Yup.string()
      .required('Harga Produk perlu diisi!'),
    deskripsiProduk: Yup.string()
      .required('Deskripsi Produk perlu diisi!'),
    file: Yup.string()
      .required('Unggah foto diperlukan!'),
  })
  return (
    <Formik
      initialValues={{
        nama: '',
        kategoriProduk: '',
        deskripsiProduk: '',
        hargaProduk: '',
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
            <TextField label="Nama Produk" name="namaProduk" type="text"/>
            <SelectField label="Kategori" name="kategoriProduk" type="text" />
            <TextField label="Harga Produk" name="hargaProduk" type="number"/>
            <TextAreaField label="Deskripsi" name="deskripsiProduk" type="text" />
          </Form>
          <FileFieldOutline name="file"/>
            <Row className='d-flex justify-content-center'>
              <Col>
                <ButtonMediumOutline>Preview</ButtonMediumOutline>
              </Col>
              <Col>
                <ButtonMedium>Terbitkan</ButtonMedium>
              </Col>
            </Row>
        </div>
      )}
    </Formik>
  )
}

export default FormFieldInfo;