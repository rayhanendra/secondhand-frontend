import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import styles from './BaseButton.module.css';
import {ModalPenawaran, ModalPenawaran2} from '../../../organisms/Modal/baseModal';
import { useWindowSize } from 'usehooks-ts';
import AlertSuccess from '../BaseAlert/BaseAlert';

function BaseButton(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[styles.button, variant === 'primary' ? styles.primary : '']}
    >
      {children}
    </Button>
  );
}
export default BaseButton;

export function ButtonLarge(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[styles.buttonLarge, variant === 'primary' ? styles.primary : '']}
    >
      {children}
    </Button>
  );
}

export function ButtonMedium(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[styles.buttonMedium, variant === 'primary' ? styles.primary : '']}
    >
      {children}
    </Button>
  );
}

export function ButtonMediumOutline(props) {
  const { variant = 'outline', children } = props;

  return (
    <Button
      className={[styles.buttonMedium, variant === 'outline' ? styles.outline : '']}
    >
      {children}
    </Button>
  );
}

export function ImageButton(props) {
  const { variant = 'primary', children } = props;

  return (
    <Button
      className={[styles.imageButton, variant === 'primary' ? styles.primary : '']}
    >
      {children}
    </Button>
  );
}

export function ButtonCard(props) {
  const { variant = 'primary', children } = props;
  const size = useWindowSize();
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  if(size.width > 992){
    return (
      <>
        <Button
          className={[styles.buttonCard, variant === 'primary' ? styles.primary : '']} 
          onClick={() => setModalShow(true)}
        >
          {children}
        </Button>
  
        <ModalPenawaran
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  } else {
    return (
      <>
        <Button
          className={[styles.buttonCard, variant === 'primary' ? styles.primary : '']} 
          onClick={() => handleShow}
        >
          {children}
        </Button>
  
        <ModalPenawaran
          show={modalShow}
          onHide={() => handleClose}
        />
      </>
    );
  }
}

export function ButtonCardOutline(props) {
  const { variant = 'outline', children } = props;

  return (
    <>
      <Button
        className={[styles.buttonCard, variant === 'outline' ? styles.outline : '']}
      >
        {children}
      </Button>
    </>
  );
}

export function ButtonCardOutlineStatus(props) {
  const { variant = 'outline', children } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className={[styles.buttonCard, variant === 'outline' ? styles.outline : '']}
        onClick={() => setModalShow(true)}
      >
        {children}
      </Button>

      <ModalPenawaran2
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export function ButtonCardNoModal(props) {
  const { variant = 'primary', children } = props;
    return (
      <>
        <Button
          className={[styles.buttonCard, variant === 'primary' ? styles.primary : '']}
          onClick={AlertSuccess}
        >
          {children}
        </Button>
      </>
    );
  };