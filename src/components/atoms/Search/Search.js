import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './Search.module.css';

function Search() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Cari di sini ..."
        className={`${styles.search}`}
        aria-label="Search"
      />
      {/* <Form.Control.Feedback>
        <span style={{ top: '5px' }}>wwdwdw </span>
      </Form.Control.Feedback> */}
    </Form>
  );
}

export default Search;
