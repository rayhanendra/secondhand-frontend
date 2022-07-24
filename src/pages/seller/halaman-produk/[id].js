import React from 'react';
import { Carousel, Stack } from 'react-bootstrap';
import styles from 'styles/product-page.module.css';
import NavBar from 'organisms/Navbar/Navbar';
import BaseButton from 'components/atoms/BaseButton/BaseButton';

export default function SellerProduct() {
  return (
    <>
      <NavBar />
      <div className={styles.all_page}>
        <div className={styles.page}>
          <div className={styles.leftContent}>
            <div className={styles.carousel}>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <img
                    src="/Rectangle134.png"
                    alt="First slide"
                    className={styles.image}
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    src="/test444.png"
                    alt="Second slide"
                    className={styles.image}
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    src="/test555.png"
                    alt="Third slide"
                    className={styles.image}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div>
              <div className={styles.largeCard}>
                <div className={styles.normalBold}>Deskripsi</div>
                &nbsp;
                <div className={styles.normal}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.normalCard}>
              <Stack gap={3}>
                <div className={styles.largeBold}>Jam Tangan Casio</div>
                <div className={styles.normal}>Aksesoris</div>
                <div className={styles.large}>Rp. 100.000</div>
                <Stack gap={3}>
                  <BaseButton type="submit">Terbitkan</BaseButton>
                  <BaseButton type="submit" variant="outlined">
                    Edit
                  </BaseButton>
                </Stack>
              </Stack>
            </div>
            <div className={styles.normalCard}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/Rectangle33.png"
                  style={{
                    width: '48px',
                    height: '48px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginRight: '15px',
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className={styles.normalBold}>Nama Penjual</div>
                  <div className={styles.normal}>Kota</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
