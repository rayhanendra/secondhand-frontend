import Image from 'next/image';
import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import Images1 from 'images/fi_list.png';
import Images2 from 'images/fi_bell.png';
import Images3 from 'images/fi_user.png';
import Images4 from 'images/imagelogo.png';
import styles from './NavbarProduk.module.css';

function NavbarProduk() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            className={styles.nav_logo}
            width={100}
            height={50}
            src={Images4}
            alt="icon-"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form.Group className={styles.search}>
              <input
                type="search"
                placeholder="Cari di sini.."
                aria-label="Search"
                className={styles.formsearch}
              />
              <Button variant="link" type="search" className={styles.btnsearch}>
                <Search className={styles.iconsearch} />
              </Button>
            </Form.Group>
          </Nav>
          <Nav className="justify-content-end gap-4">
            <Navbar.Brand>
              <Image src={Images1} alt="icon-" />
            </Navbar.Brand>
            <Navbar.Brand>
              <Image src={Images2} alt="icon-" />
            </Navbar.Brand>
            <Navbar.Brand>
              <Image src={Images3} alt="icon-" />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarProduk;
