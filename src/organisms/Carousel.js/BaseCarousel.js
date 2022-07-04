import React from 'react';
import Image from 'next/image';
import banner from 'images/ImgBanner.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import uuid from 'utils/uuid';
import styles from './BaseCarousel.module.css';

function BaseCarousel() {
  const data = [
    { img: banner },
    { img: banner },
    { img: banner },
    { img: banner },
    { img: banner },
  ];

  return (
    <Carousel
      autoPlay
      centerMode
      centerSlidePercentage={85}
      emulateTouch
      infiniteLoop
      selectedItem={1}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      className="mt-4"
    >
      {data.map(({ img }) => (
        <div key={uuid()} className={[styles.box]}>
          <Image className="px-2" src={img} alt={img} layout="fill" />
        </div>
      ))}
    </Carousel>
  );
}

export default BaseCarousel;
