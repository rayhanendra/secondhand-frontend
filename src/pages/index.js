import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from 'organisms/NavBar/NavBar';

import Filter from 'components/molecules/Filter/Filter';
import CardList from 'organisms/CardList/CardList';
import FaButton from 'components/atoms/FaButton/FaButton';
import IconPlus from 'images/IconPlus';
import BsCarousel from 'organisms/Carousel.js/BaseCarousel';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container fluid="xl" className="p-0">
        <BsCarousel />
        <div className="mb-2 mb-md-4">
          <Filter />
        </div>
        <div className="mb-4 px-3">
          <CardList />
        </div>
      </Container>
      <FaButton>
        <IconPlus />
        Jual
      </FaButton>
    </div>
  );
}
