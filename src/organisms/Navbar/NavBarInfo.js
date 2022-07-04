import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useRouter } from 'next/router';
import styles from './navbarInfo.module.css';

const JudulNavbar = () => {
  const { pathname } = useRouter();
  if (pathname === '/formInfoProduk') {
    return 'Lengkapi info Produk';
  }
  if (pathname === '/infoPenawar') {
    return 'Info Penawar';
  }
  return 'Lengkapi info Akun';
};

function NavBarInfo() {
  return (
    <Navbar className={styles.navbar}>
      <button type="button" className={styles.backButton}>
        <ArrowLeft size={30} color="#151515" />
      </button>
      <NavbarBrand className={styles.logo} href="/" />
      <Navbar.Collapse className="justify-content-center">
        <div className={styles.titleNavbar}>{JudulNavbar()}</div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarInfo;
