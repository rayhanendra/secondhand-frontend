import BaseButton from 'components/atoms/BaseButton/BaseButton';
import IconSearch from 'images/IconSearch';
import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import uuid from 'utils/uuid';
import style from './Filter.module.css';

function Filter() {
  const [activeIndex, setActiveIndex] = useState('');

  const filter = [
    { label: 'Semua', value: 'semua' },
    { label: 'Hobi', value: 'hobi' },
    { label: 'Kendaraan', value: 'kendaraan' },
    { label: 'Baju', value: 'baju' },
    { label: 'Elektronik', value: 'elektronik' },
    { label: 'Kesehatan', value: 'kesehatan' },
  ];

  return (
    <div>
      <h6 className="fw-bold mb-3 px-3">Telusuri Kategori</h6>
      <Stack
        direction="horizontal"
        gap={3}
        className={['overflow-auto px-3', [style.scrollbar]]}
      >
        {filter.map(({ label }, index) => (
          <BaseButton
            key={uuid()}
            variant="secondary"
            onClick={() => setActiveIndex(index)}
            active={index === activeIndex}
          >
            {index === activeIndex ? (
              <IconSearch color="white" />
            ) : (
              <IconSearch color="purple" />
            )}
            {label}
          </BaseButton>
        ))}
      </Stack>
    </div>
  );
}

export default Filter;
