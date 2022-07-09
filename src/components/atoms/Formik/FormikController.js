import React from 'react';
import FormikInput from './FormikInput/FormikInput';

function FormikController(props) {
  const { control, formikProps, ...rest } = props;
  switch (control) {
    case 'input':
      return <FormikInput formikProps={formikProps} {...rest} />;

    default:
      return null;
  }
}
export default FormikController;
