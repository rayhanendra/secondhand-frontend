import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarCollapse } from 'react-bootstrap';
import styles from './navbarInfo.module.css';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-bootstrap-icons';

const JudulNavbar = () => {
  const { pathname } = useRouter();
  if (pathname == '/formInfoProduk') {
    return 'Lengkapi info Produk';
  } else if (pathname == '/infoPenawar') {
    return 'Info Penawar';
  } else {
    return 'Lengkapi info Akun';
  }
};

function NavBarInfo() {
  return (
    <Navbar className={styles.navbar}>
      <button className={styles.backButton}>
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
