import BaseButton from 'components/atoms/BaseButton/BaseButton';
import IconSearch from 'images/IconSearch';
import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import uuid from 'utils/uuid';
import style from './Filter.module.css';

function Filter(props) {
  const { options = [] } = props;
  const [activeIndex, setActiveIndex] = useState('');

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Stack
        direction="horizontal"
        gap={3}
        className={['overflow-auto px-3', [style.scrollbar]]}
      >
        {options.map(({ label }, index) => (
          <BaseButton
            key={uuid()}
            variant="secondary"
            onClick={() => handleActive(index)}
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
