import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ sort }) => {
  const onChangeHandler = (e) => {
    sort(e.target.value);
  };
  return (
    <>
      <select onChange={onChangeHandler} className="select-wrap-field">
        <option value="">Select Price</option>
        <option value="asc">Price - Low to High</option>
        <option value="des">Price - High to Low</option>
      </select>
    </>
  );
};

Filter.propTypes = {
  sort: PropTypes.func.isRequired,
};

export default Filter;
