import React from 'react';
import { Field } from 'formik';
import { useRouter } from 'next/router';
import styles from './FormikInput.module.css';

const ButtonStyle = () => {
  const { pathname } = useRouter();
  if (pathname === '/formInfoProduk') {
    return styles.fileInputOutline;
  }

  return styles.fileInput;
};

function FormikFileInput(props) {
  const { name, label, formikProps, ...rest } = props;
  return (
    <div className={ButtonStyle()}>
      <Field
        name={name}
        {...rest}
        style={{
          opacity: '0',
          width: '96px',
          height: '96px',
        }}
      />
    </div>
  );
}
export default FormikFileInput;
