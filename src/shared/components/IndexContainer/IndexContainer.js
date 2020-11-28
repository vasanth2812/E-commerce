import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/global.scss';

const IndexContainer = ({ title, children }) => {
  return (
    <>
      <div className="header-wrap">
        <h3 className="opensans-family">{title}</h3>
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
