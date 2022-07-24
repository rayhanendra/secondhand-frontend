import React from 'react';
import FormikInput from './FormikInput/FormikInput';
import FormikSelect from './FormikInput/FormikSelect';
import Textarea from './FormikInput/FormikTextArea';
import FormikFileInput from './FormikInput/FormikFileInput';
import FormikRadio from './FormikInput/FormikRadio';

function FormikController(props) {
  const { control, formikProps, ...rest } = props;
  switch (control) {
    case 'input':
      return <FormikInput formikProps={formikProps} {...rest} />;
    case 'select':
      return <FormikSelect formikProps={formikProps} {...rest} />;
    case 'textarea':
      return <Textarea formikProps={formikProps} {...rest} />;
    case 'fileinput':
      return <FormikFileInput formikProps={formikProps} {...rest} />;
    case 'formikradio':
      return <FormikRadio formikProps={formikProps} {...rest} />;
    default:
      return null;
  }
}
export default FormikController;
