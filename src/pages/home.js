import React from 'react';
import { Container } from 'react-bootstrap';

import Filter from 'components/molecules/Filter/Filter';
import CardProduct from 'organisms/CardProduct/CardProduct';
import FaButton from 'components/atoms/FaButton/FaButton';
import BsCarousel from 'organisms/Carousel.js/BaseCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { optionsFilter } from 'utils/constants';
import BaseNavBar from 'organisms/NavBar/BaseNavBar';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <BaseNavBar />
      <Container fluid="xl" className="p-0">
        <BsCarousel />
        <div className="mb-2 mb-md-4">
          <h6 className="fw-bold mb-3 px-3">Telusuri Kategori</h6>
          <Filter options={optionsFilter} />
        </div>
        <div className="mb-4 px-3">
          <CardProduct />
        </div>
      </Container>
      <FaButton onClick={() => router.push('/tambah-produk')}>
        <FontAwesomeIcon icon={faPlus} />
        <Link href="/tambah-produk">Jual</Link>
      </FaButton>
    </div>
  );
}
