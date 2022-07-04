import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertSuccess() {
  return (
    <div>
      <Alert variant="success" style={{ width: '42rem' }}>
        <Alert.Heading>Status produk berhasil diperbarui</Alert.Heading>
      </Alert>
    </div>
  );
}

export default AlertSuccess;
