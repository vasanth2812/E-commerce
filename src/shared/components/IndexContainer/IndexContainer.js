import React from 'react';
import PropTypes from 'prop-types';

const IndexContainer = ({ title, children }) => {
  return (
    <>
      <div className="header-wrap">
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </>
  );
};

IndexContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default IndexContainer;
