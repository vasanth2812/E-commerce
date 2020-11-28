import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const Error = ({ title }) => {
  return <Alert color="danger">{title}</Alert>;
};

Error.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Error;
