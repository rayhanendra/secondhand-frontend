import Filter from 'components/molecules/Filter/Filter';
import AccountBox from 'organisms/AccountBox/AccountBox';
import CategoryBox from 'organisms/CategoryBox/CategoryBox';
import NavBar from 'organisms/NavBar/NavBar';
import ProductCard from 'organisms/ProductCard/ProductCard';
import React from 'react';
import { Container } from 'react-bootstrap';

const optionsFilter = [
  { label: 'Produk', value: 'product' },
  { label: 'Diminati', value: 'wanted' },
  { label: 'Terjual', value: 'sold' },
];

function IndexPage() {
  return (
    <div>
      {/* Notes: Navbar sementara */}
      <NavBar />
      <Container fluid="xl" className="p-0 py-4">
        <div className="px-3 fw-bold fs-5">Daftar Jual Saya</div>
        <div className="p-3">
          <AccountBox />
        </div>
        <div className="py-2 mb-md-4 d-lg-none">
          <Filter options={optionsFilter} />
        </div>
        <div className="d-flex">
          <div className="p-3 d-none d-lg-block">
            <CategoryBox />
          </div>
          <div className="mb-4 px-3">
            <ProductCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default IndexPage;
