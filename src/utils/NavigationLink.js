import {
  faBox,
  faDollarSign,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import uuid from './uuid';

function createData(icon, title, link) {
  return { id: uuid(), icon, title, link: `/seller/daftar-jual${link}` };
}

const CategoryList = [
  createData(<FontAwesomeIcon icon={faBox} />, 'Semua Produk', '/semua-produk'),
  createData(<FontAwesomeIcon icon={faHeart} />, 'Diminati', '/diminati'),
  createData(<FontAwesomeIcon icon={faDollarSign} />, 'Terjual', '/terjual'),
];

const dummy = [];

export { CategoryList, dummy };
