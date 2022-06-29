import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { CategoryList } from 'utils/NavigationLink';
import styles from './CategoryBox.module.css';

function CategoryBox() {
  const router = useRouter();

  const [selectedRoute, setSelectedRoute] = useState(router.pathname);

  const handleListItemClick = (_event, item) => {
    setSelectedRoute(item.link);
    router.replace(item.link);
  };

  return (
    <div className={styles['category-box']}>
      <div className={styles.title}>Kategori</div>
      <div className="d-flex flex-column gap-3 w-100">
        {CategoryList.map((item) => (
          <div key={item.id}>
            <div
              onClick={(event) => handleListItemClick(event, item)}
              onKeyDown={(event) => handleListItemClick(event, item)}
              type="button"
              role="button"
              tabIndex={item.link}
              style={selectedRoute === item.link ? { color: '#7126B5' } : {}}
            >
              <div
                className="d-flex align-items-center justify-content-between"
                type="button"
              >
                <div className="d-flex align-items-center gap-3">
                  <div className={styles.icon}>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            <div className={styles['border-container']}>
              <div className="border-bottom" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBox;
