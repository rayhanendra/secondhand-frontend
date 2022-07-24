import BaseButton from 'components/atoms/BaseButton/BaseButton';
import Search from 'components/atoms/Search/Search';
import React, { useState } from 'react';
import {
  Container,
  Dropdown,
  Nav,
  Navbar,
  Offcanvas,
  Stack,
} from 'react-bootstrap';
import IconLogin from 'images/iconLogin';
import Link from 'next/link';
import {
  faBell,
  faBookmark,
  faEdit,
  faGear,
  faList,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/slices/auth';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <FontAwesomeIcon
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    icon={faUser}
    color="gray"
  />
));

CustomToggle.displayName = 'CustomToggle';

function NavBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        router.push('/home');
      })
      .catch(() => {});
  };

  return (
    <div>
      <Navbar fluid="true" collapseOnSelect expand="md" className="shadow-sm">
        <Container fluid="xl">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleShow}
          />
          <div className="d-flex align-items-center gap-3">
            <Navbar.Brand
              className="d-none d-md-block"
              onClick={() => router.push('/home')}
              style={{ cursor: 'pointer' }}
            >
              Second Hand
            </Navbar.Brand>

            <Search />
          </div>
          {!user ? (
            <Nav.Link className="d-none d-md-block">
              <BaseButton variant="primary">
                <Link href="/login">
                  <div>
                    <IconLogin /> Masuk
                  </div>
                </Link>
              </BaseButton>
            </Nav.Link>
          ) : (
            <div className="d-none d-md-flex">
              <Nav.Link href="/seller/daftar-jual">
                <FontAwesomeIcon icon={faList} color="gray" />
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon icon={faBell} color="gray" />
              </Nav.Link>
              <Nav.Link>
                <Dropdown drop="start">
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" />
                  <Dropdown.Menu className={styles.menu}>
                    <Dropdown.Header>Akun Saya</Dropdown.Header>
                    <Dropdown.Item
                      className={[
                        styles.item,
                        ['d-flex align-items-center gap-3'],
                      ]}
                      onClick={() => router.push('/profil')}
                    >
                      <FontAwesomeIcon icon={faEdit} color="#7126B5" />
                      Ubah Akun
                    </Dropdown.Item>
                    <div className="border-bottom" />
                    <Dropdown.Item
                      className={[
                        styles.item,
                        ['d-flex align-items-center gap-3'],
                      ]}
                    >
                      <FontAwesomeIcon icon={faGear} color="#7126B5" />
                      Pengaturan Akun
                    </Dropdown.Item>
                    <div className="border-bottom" />
                    <Dropdown.Item
                      href="#/action-3"
                      className={[
                        styles.item,
                        ['d-flex align-items-center gap-3'],
                      ]}
                    >
                      <FontAwesomeIcon icon={faBookmark} color="#7126B5" />
                      Daftar Simpan
                    </Dropdown.Item>
                    <div className="border-bottom" />
                    <Dropdown.Item
                      onClick={handleLogout}
                      className={[
                        styles.item,
                        ['d-flex align-items-center gap-3'],
                      ]}
                    >
                      <FontAwesomeIcon icon={faSignOut} color="#7126B5" />
                      Keluar
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </div>
          )}
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Second Hand</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!user ? (
            <BaseButton>
              <Link href="/login">Masuk</Link>
            </BaseButton>
          ) : (
            <div className="">
              <Stack gap={2}>
                <Link href="/notifikasi">
                  <div className="">Notifikasi</div>
                </Link>
                <Link href="/seller/daftar-jual">
                  <div className="">Daftar Jual</div>
                </Link>
                <Link href="/profil">
                  <div className="">Akun Saya</div>
                </Link>
              </Stack>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavBar;
