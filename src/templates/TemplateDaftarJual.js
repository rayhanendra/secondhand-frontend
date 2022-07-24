import AccountBox from 'organisms/AccountBox/AccountBox';
import CategoryBox from 'organisms/CategoryBox/CategoryBox';
import BaseNavBar from 'organisms/NavBar/BaseNavBar';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Filter } from 'react-bootstrap-icons';
import { optionsCategory } from 'utils/constants';

function TemplateDaftarJual(props) {
  const { children } = props;

  return (
    <>
      {/* Notes: Navbar sementara */}
      <BaseNavBar />
      <Container fluid="xl" className="p-0 py-4">
        <div className="px-3 fw-bold fs-5">Daftar Jual Saya</div>
        <div className="p-3">
          <AccountBox />
        </div>
        <div className="py-2 mb-md-4 d-lg-none">
          <Filter options={optionsCategory} />
        </div>
        <div className="d-flex">
          <div className="p-3 d-none d-lg-block">
            <CategoryBox />
          </div>
          <div className="mb-4 px-3 w-100">{children}</div>
        </div>
      </Container>
    </>
  );
}

export default TemplateDaftarJual;
