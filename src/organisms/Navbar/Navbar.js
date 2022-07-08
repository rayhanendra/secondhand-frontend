import BaseButton from 'components/atoms/BaseButton/BaseButton';
import Search from 'components/atoms/Search/Search';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import IconLogin from 'images/iconLogin';
import Link from 'next/link';

function NavBar() {
  return (
    <div>
      <Navbar fluid="true" collapseOnSelect expand="md" className="shadow-sm">
        <Container fluid="xl">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#home">Second Hand</Navbar.Brand>
            <Nav>
              <Nav.Link href="#deets" className="d-lg-none">
                <BaseButton>
                  <Link href="/login">Masuk</Link>
                </BaseButton>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Search />
          <Nav.Link href="#deets" className="d-none d-lg-block">
            <BaseButton variant="primary">
              <Link href="/login">
                <div>
                  <IconLogin /> Masuk
                </div>
              </Link>
            </BaseButton>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
