/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikController from 'components/atoms/Formik/FormikController';
import BaseButton from 'components/atoms/BaseButton/BaseButton';
import { useDispatch, useSelector } from 'react-redux';
import NavBarInfo from 'organisms/NavBar/NavBarInfo';
import { getUserById, updateUser } from 'store/slices/auth';
import Swal from 'sweetalert2';
import uuid from 'utils/uuid';
import styles from '../styles/info-produk.module.css';

function Profil() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { user, profile } = useSelector((state) => state.auth);

  const initialValues = {
    name: profile?.name ?? user?.name,
    city: profile?.city ?? user?.city,
    address: profile?.address ?? user?.address,
    contact: profile?.contact ?? user?.contact,
    file: '',
  };

  const validationSchema = Yup.object({
    // name: Yup.string().required('Nama diperlukan!'),
    city: Yup.string().required('Kota diperlukan!'),
    address: Yup.string().required('Alamat diperlukan!').nullable(),
    contact: Yup.number()
      .positive('Format No HP salah!')
      .min(9, 'Format No HP salah!')
      .required('No HP diperlukan!')
      .nullable(),
  });

  // Handle Image
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

  const changeFileHandler = (e) => {
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

  const onSubmit = (values) => {
    const { name, address, contact } = values;
    const file = images;
    setIsLoading(true);
    dispatch(
      updateUser({ data: { name, address, contact, file }, id: user.id })
    )
      .unwrap()
      .then(() => {
        setIsLoading(false);
        dispatch(getUserById({ id: user.id }));
        Swal.fire({
          title: 'Success',
          text: 'Data berhasil diubah!',
          icon: 'success',
        });
      })
      .catch(() => {});
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Form>
          <Stack gap={4}>
            <div className={styles.btnInput}>
              <FormikController
                id="file"
                name="file"
                control="fileinput"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                onChange={changeFileHandler}
                formikProps={formikProps}
              />
              {images.length > 0 ? (
                <div>
                  {images.map((image) => (
                    <p key={uuid()}>
                      {/* Masih Pake img biasa, karna gabisa distyle margin */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt=""
                        width={96}
                        height={96}
                        style={{
                          borderRadius: '8px',
                          objectFit: 'cover',
                          marginLeft: '-96px',
                        }}
                      />
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
            <FormikController
              control="input"
              type="text"
              label="Nama*"
              name="name"
              placeholder="Nama Lengkap"
              formikProps={formikProps}
            />
            <FormikController
              control="input"
              type="text"
              label="Kota*"
              name="city"
              placeholder="Kota"
              formikProps={formikProps}
            />
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
              name="contact"
              placeholder="contoh: +628123456789"
              formikProps={formikProps}
            />
            <BaseButton type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Simpan'}
            </BaseButton>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export function ProfilePage() {
  return (
    <div>
      <NavBarInfo />
      <div className={styles.row}>
        <div className={styles.bagianKanan}>
          <Profil />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
