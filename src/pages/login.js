import React from 'react';
import { Form, Stack } from 'react-bootstrap';
import styles from 'styles/login-register.module.css';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FormikController from 'components/atoms/Formik/FormikController';
import BaseButton from 'components/atoms/BaseButton/BaseButton';
import TemplateLoginRegister from 'templates/TemplateLoginRegister';
import { login } from 'store/slices/auth';
import { useDispatch } from 'react-redux';

function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email diperlukan'),
    password: Yup.string().required('Password diperlukan'),
  });

  const onSubmit = (values) => {
    const { email, password } = values;

    // const formData = new FormData();
    // formData.append('email', email);
    // formData.append('password', password);

    dispatch(login({ data: { email, password } }));

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
            <BaseButton type="submit">Masuk</BaseButton>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default function Login() {
  return (
    <TemplateLoginRegister>
      <Stack gap={5} className="p-2 p-md-5">
        <h1>
          <strong>Masuk</strong>
        </h1>
        <LoginForm />
        <div className={styles['text-redirect']}>
          Belum punya akun ? &nbsp;
          <Link href="/register">
            <strong
              className={styles['text-primary']}
              style={{ cursor: 'pointer' }}
            >
              Daftar di sini
            </strong>
          </Link>
        </div>
      </Stack>
    </TemplateLoginRegister>
  );
}
