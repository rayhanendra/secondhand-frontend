/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, Stack } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FormikController from 'components/atoms/Formik/FormikController';
import BaseButton from 'components/atoms/BaseButton/BaseButton';
import { useDispatch } from 'react-redux';
import NavBarInfo from 'organisms/Navbar/NavBarInfo';
import { Camera, Display } from 'react-bootstrap-icons';
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

  // Image Reader Sebelum Upload
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

  const changeHandler = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert('Selected images are not of valid type!');
  };

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const images = [];
    const fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

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
                id="file"
                name="file"
                control="fileinput"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                onChange={changeHandler}
                formikProps={formikProps}
              />
            </div>
            {images.length > 0 ? (
              <div>
                {
                  // eslint-disable-next-line react/no-array-index-key
                  images.map((image, idx) => (
                    <p key={idx} className={styles.imagePreview}>
                      <img
                        src={image}
                        alt=""
                        style={{
                          width: '96px',
                          height: '96px',
                          borderRadius: '8px',
                          objectFit: 'cover',
                        }}
                      />
                    </p>
                  ))
                }
              </div>
            ) : null}
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
