import { React } from 'react';
import { Modal, Card } from 'react-bootstrap';
import styles from './baseModal.module.css';
import {
  BaseButton,
  ButtonCardNoModal,
} from '../../components/atoms/BaseButton/BaseButton';
import { Whatsapp } from 'react-bootstrap-icons';

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
      <Modal.Header style={{ border: 'none' }} closeButton />
      <Modal.Body>
        <div className={styles.judulModal}>
          Yeay kamu berhasil mendapat harga yang sesuai
        </div>
        <p>
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </p>
        <div className={styles.content}>
          <div className={styles.judulCard}>Product Match</div>
          <div className={styles.card}>
            <div className={styles.leftContent}>
              <Card.Img
                variant="top"
                src="/potrait.jpg"
                className={styles.foto}
              />
            </div>
            <div className="ps-0">
              <div>
                <p className={styles.boldText}>Nama Pembeli</p>
              </div>
              <div className="mt-3">
                <p className={styles.smallText}>Kota</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.leftContent}>
              <Card.Img
                variant="top"
                src="/watch.webp"
                className={styles.foto}
              />
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
      <Modal.Footer
        style={{
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '0px',
        }}
      >
        <ButtonCardNoModal>
          <div>
            Hubungi Lewat Whatsapp &nbsp;
            <Whatsapp />
          </div>
        </ButtonCardNoModal>
      </Modal.Footer>
    </Modal>
  );
}
