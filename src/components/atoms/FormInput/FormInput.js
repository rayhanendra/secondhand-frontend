import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { Camera } from 'react-bootstrap-icons';
import styles from './FormInput.module.css';

export function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 d-flex flex-column">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={styles.formInput}
        {...(meta.touched && meta.error && 'is-invalid')}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
}

export default TextField;

export function SelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 d-flex flex-column">
      <label htmlFor={field.name}>{label}</label>
      <Form.Select
        className={styles.formInput}
        {...(meta.touched && meta.error && 'is-invalid')}
        {...field}
        {...props}
        autoComplete="off"
      >
        <option>Pilih Kota</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
}

export function TextAreaField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 d-flex flex-column">
      <label htmlFor={field.name}>{label}</label>
      <Form.Control
        as="textarea"
        rows={4}
        className={styles.formInput}
        {...(meta.touched && meta.error && 'is-invalid')}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
}

export function FileField({ label, ...props }) {
  const [field, meta] = useField(props);

  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
  };

  return (
    <div className="mb-2 d-flex flex-column">
      <Button className={styles.buttonFile} onClick={handleClick}>
        <Camera color="#7126B5" size={30} />
      </Button>
      <Form.Control
        type="file"
        className={styles.fileInput}
        {...(meta.touched && meta.error && 'is-invalid')}
        {...field}
        {...props}
        ref={hiddenFileInput}
        onChange={handleChange}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
}
