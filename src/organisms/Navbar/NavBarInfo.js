import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import styles from './navbarInfo.module.css';

function NavBarInfo() {
  return (
    <Navbar className={styles.navbar}>
      <NavbarBrand className={styles.logo} href='/'/>
      <Navbar.Collapse className='justify-content-center'>
        <div className={styles.titleNavbar}>
          Lengkapi Info Akun
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarInfo;