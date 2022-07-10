import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './FormikInput.module.css';

function FormikRadio(props) {
  const { name, label, formikProps, value, ...rest } = props;
  return (
    <>
      <Field type="radio" name={name} value={value} {...rest} />
      <label
        htmlFor={name}
        style={{
          paddingLeft: '10px',
        }}
      >
        {label}
      </label>
      <div className={styles['input-error']}>
        <ErrorMessage name={name} />
      </div>
    </>
  );
}
export default FormikRadio;
