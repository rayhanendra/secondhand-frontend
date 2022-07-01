import { React, useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import { Button, Form } from 'react-bootstrap'; 
import { Camera, Plus } from 'react-bootstrap-icons';
import styles from './FormInput.module.css';

export function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 d-flex flex-column">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={styles.formInput}{...meta.touched && meta.error && 'is-invalid'}
        {...field} {...props}
        autoComplete="off" placeholder={'Masukkan ' + label}
      />
      <ErrorMessage component="div" name={field.name} className={styles.error} />
    </div>
  )
}
export default TextField;

export function SelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 d-flex flex-column">
      <label htmlFor={field.name}>{label}</label>
      <Form.Select className={styles.formInput}{...meta.touched && meta.error && 'is-invalid'}
        {...field} {...props}
        autoComplete="off">
          <option>Pilih {label}</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
      </Form.Select>
      <ErrorMessage component="div" name={field.name} className={styles.error} />
    </div>
  )
}

export function TextAreaField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 d-flex flex-column">
      <label htmlFor={field.name}>{label}</label>
      <Form.Control as="textarea" rows={4} className={styles.formInput}{...meta.touched && meta.error && 'is-invalid'}
        {...field} {...props}
        autoComplete="off" placeholder={'Masukkan ' + label}/> 
      <ErrorMessage component="div" name={field.name} className={styles.error} />
    </div>
  )
}

export function FileField({ label, ...props }) {
  const [field, meta] = useField(props);

  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
  };

  return (
    <div className="mb-2 d-flex flex-column">
      <Button className={styles.buttonFile} onClick={handleClick}>
        <Camera color='#7126B5' size={30} />
      </Button>
      <Form.Control type="file" className={styles.fileInput}{...meta.touched && meta.error && 'is-invalid'}
          {...field} {...props} ref={hiddenFileInput} onChange={handleChange}
          autoComplete="off" />
      <ErrorMessage component="div" name={field.name} className={styles.error} />
    </div>
  )
}

export function FileFieldOutline({ label, ...props }) {
  const [field, meta] = useField(props);

  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
  };

  return (
    <div className="mb-2 d-flex flex-column">
      <Button className={styles.buttonFileOutline} onClick={handleClick}>
        <Plus color='#7126B5' size={30} />
      </Button>
      <Form.Control type="file" className={styles.fileInput}{...meta.touched && meta.error && 'is-invalid'}
          {...field} {...props} ref={hiddenFileInput} onChange={handleChange}
          autoComplete="off" />
      <ErrorMessage component="div" name={field.name} className={styles.error} />
    </div>
  )
}

export const RadioForm = () => {
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

    setItem(prevState => ({
      ...prevState,
      kindOfStand: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${kindOfStand}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group controlId="kindOfStand">
        <Form.Check
          value="BerhasilTerjual"
          type="radio"
          aria-label="radio 1"
          label="Berhasil Terjual"
          onChange={handleChange}
          checked={kindOfStand === "BerhasilTerjual"}
        />
        <div className={styles.teksModal}>
          Kamu telah sepakat menjual produk ini kepada pembeli
        </div>
        <Form.Check
          value="BatalkanTransaksi"
          type="radio"
          aria-label="radio 2"
          label="Batalkan Transaksi"
          onChange={handleChange}
          checked={kindOfStand === "BatalkanTransaksi"}
        />
        <div className={styles.teksModal}>
          Kamu membatalkan transaksi produk ini dengan pembeli
        </div>
      </Form.Group>
    </form>
  );
};