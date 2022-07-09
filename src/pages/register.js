import React from 'react';
import { Stack } from 'react-bootstrap';
import styles from 'styles/login-register.module.css';
import Link from 'next/link';
import FormikController from 'components/atoms/Formik/FormikController';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import BaseButton from 'components/atoms/BaseButton/BaseButton';
import TemplateLoginRegister from 'templates/TemplateLoginRegister';
import { register } from 'store/slices/auth';
import { useDispatch } from 'react-redux';

function RegisterForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Nama diperlukan'),
    email: Yup.string().email().required('Email diperlukan'),
    password: Yup.string().required('Password diperlukan'),
  });

  const onSubmit = (values) => {
    const { name, email, password } = values;
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('email', email);
    // formData.append('password', password);

    dispatch(register({ data: { name, email, password } }));

    console.log('Form data', values);
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
            <FormikController
              control="input"
              type="name"
              label="Nama"
              name="name"
              placeholder="Nama"
              formikProps={formikProps}
            />
            <FormikController
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
              formikProps={formikProps}
            />
            <FormikController
              control="input"
              type="password"
              label="Password"
              name="password"
              placeholder="Masukkan password"
              formikProps={formikProps}
            />
            <BaseButton type="submit">Daftar</BaseButton>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default function Register() {
  return (
    <TemplateLoginRegister>
      <Stack gap={5} className="p-2 p-md-5">
        <h1>
          <strong>Daftar</strong>
        </h1>
        <RegisterForm />
        <div className={styles['text-redirect']}>
          Sudah punya akun? &nbsp;
          <Link href="/login">
            <strong
              className={styles['text-primary']}
              style={{ cursor: 'pointer' }}
            >
              Masuk di sini
            </strong>
          </Link>
        </div>
      </Stack>
    </TemplateLoginRegister>
  );
}
