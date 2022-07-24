import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from 'organisms/NavBar/NavBar';

import Filter from 'components/molecules/Filter/Filter';
import CardList from 'organisms/CardList/CardList';
import FaButton from 'components/atoms/FaButton/FaButton';
import BsCarousel from 'organisms/Carousel/BaseCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { optionsFilter } from 'utils/constants';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <NavBar />
      <Container fluid="xl" className="p-0">
        <BsCarousel />
        <div className="mb-2 mb-md-4">
          <h6 className="fw-bold mb-3 px-3">Telusuri Kategori</h6>
          <Filter options={optionsFilter} />
        </div>
        <div className="mb-4 px-3">
          <CardList />
        </div>
      </Container>
      <FaButton onClick={() => router.push('/tambah-produk')}>
        <FontAwesomeIcon icon={faPlus} /> Jual
      </FaButton>
    </div>
  );
}
