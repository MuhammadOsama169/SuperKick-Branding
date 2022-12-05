import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

export const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };
  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  };
  return (
    <Button {...configButton} size="large">
      {children}
    </Button>
  );
};
ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
