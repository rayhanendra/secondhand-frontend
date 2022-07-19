import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './FormikInput.module.css';

function FormikSelect(props) {
  const { name, label, formikProps, selected, disabled, ...rest } = props;
  return (
    <div className={styles['input-container']}>
      <label htmlFor={name} className={styles['input-label']}>
        {label}
      </label>
      <Field
        as="select"
        className={styles['input-field']}
        id={name}
        name={name}
        value={selected}
        disabled={disabled}
        {...rest}
      />
      <div className={styles['input-error']}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default FormikSelect;
