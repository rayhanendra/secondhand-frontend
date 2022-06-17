import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarCollapse } from 'react-bootstrap';
import styles from './navbarInfo.module.css';
import { useRouter } from 'next/router';

const JudulNavbar = () => {
  const { pathname } = useRouter();
  if (pathname == '/formInfoProduk') {
    return 'Lengkapi info Produk';
  } else {
    return 'Lengkapi info Akun';
  }
}

function NavBarInfo() {
  return (
    <Navbar className={styles.navbar}>
      <NavbarBrand className={styles.logo} href='/'/>
      <Navbar.Collapse className='justify-content-center'>
        <div className={styles.titleNavbar}>
          {JudulNavbar()}
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarInfo;
