import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

export const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }

  return <TextField {...configTextField} />;
};
TextfieldWrapper.propTypes = {
  name: PropTypes.node.isRequired,
};
