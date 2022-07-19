import React from 'react';
import { useRouter } from 'next/router';
import { Camera } from 'react-bootstrap-icons';
import styles from './FormikInput.module.css';

const ButtonStyle = () => {
  const { pathname } = useRouter();
  if (pathname === '/tambah-produk') {
    return styles.fileInputOutline;
  }

  return styles.fileInput;
};

function FormikFileInput(props) {
  const { name, label, id, formikProps, ...rest } = props;
  return (
    <div className={ButtonStyle()}>
      <Camera size={30} color="#7126B5" className={styles.icon} />
      <input id={id} name={name} {...rest} className={styles.iconBtn} />
    </div>
  );
}
export default FormikFileInput;
