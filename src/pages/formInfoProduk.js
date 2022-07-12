/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, Stack } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FormikController from 'components/atoms/Formik/FormikController';
import BaseButton from 'components/atoms/BaseButton/BaseButton';
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
    file: [],
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
            <div className={styles.imagePreviewProduk}>
              <FormikController
                id="file"
                name="file"
                control="fileinput"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                onChange={changeHandler}
                formikProps={formikProps}
                variant="outlined"
                multiple
              />
              {images.length > 0 ? (
                <div className={styles.imagePreviewProduk}>
                  {
                    // eslint-disable-next-line react/no-array-index-key
                    images.map((image) => (
                      <p key={image.id}>
                        <img
                          src={image}
                          alt=""
                          style={{
                            width: '96px',
                            height: '96px',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            objectFit: 'cover',
                          }}
                        />
                      </p>
                    ))
                  }
                </div>
              ) : null}
            </div>
            <div className={styles.btnProduk}>
              <BaseButton type="submit" variant="produkOutlined">
                Preview
              </BaseButton>
              <BaseButton type="submit" variant="produk">
                Terbitkan
              </BaseButton>
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
