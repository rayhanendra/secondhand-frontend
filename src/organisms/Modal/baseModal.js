import {React, useState} from 'react';
import { Modal, Card, Alert } from 'react-bootstrap';
import styles from './baseModal.module.css';
import {BaseButton, ButtonCardNoModal } from '../../components/atoms/BaseButton/BaseButton';
import {Whatsapp} from 'react-bootstrap-icons';
import {TextField, RadioForm} from '../../components/atoms/FormInput/FormInput';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Status produk berhasil diperbarui</Alert.Heading>
      </Alert>
    );
  }
}

export function ModalPenawaran(props) {
  return (
    <Modal
      {...props}
      dialogClassName={styles.modal}
      contentClassName={styles.modal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ border: 'none' }} closeButton/>
      <Modal.Body>
        <div className={styles.judulModal}>
          Yeay kamu berhasil mendapat harga yang sesuai
        </div>
        <p>
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </p>
        <div className={styles.content}>
          <div className={styles.judulCard}>
            Product Match
          </div>
          <div className={styles.card}>
            <div className={styles.leftContent}>
              <Card.Img variant="top" src="/potrait.jpg" className={styles.foto} />
            </div>
            <div className='ps-0'>
              <p className={styles.boldText}>Nama Pembeli</p>
              <p className={styles.smallText}>Kota</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.leftContent}>
              <Card.Img variant="top" src="/watch.webp" className={styles.foto} />
            </div>
            <div className={styles.rightContent}>
              <div className={styles.content}>
                <p className={styles.mediumText}>Jam Tangan Casio</p>
                <p className={styles.mediumText}>R̶p̶.̶ ̶2̶5̶0̶.̶0̶0̶0̶</p>
                <p className={styles.mediumText}>Ditawar Rp. 200.000</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ 
        border: 'none', 
        display: 'flex', 
        justifyContent: 'center', 
        paddingTop: '0px'
        }}>
        <ButtonCardNoModal onClick={props.onHide}>
          Hubungi Lewat Whatsapp &nbsp;
          <Whatsapp/>
        </ButtonCardNoModal>
      </Modal.Footer>
    </Modal>
  );
}

export function ModalPenawaran2(props) {
  return (
    <Modal
      {...props}
      dialogClassName={styles.modal}
      contentClassName={styles.modal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ border: 'none' }} closeButton/>
      <Modal.Body>
        <div className={styles.judulModal}>
          Perbarui status penjualan produkmu
        </div>
        <div className={styles.content2}>
          <RadioForm />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ 
        border: 'none', 
        display: 'flex', 
        justifyContent: 'center', 
        paddingTop: '0px'
        }}>
        <ButtonCardNoModal onClick={AlertDismissibleExample()}>
          Kirim
        </ButtonCardNoModal>
      </Modal.Footer>
    </Modal>
  );
}