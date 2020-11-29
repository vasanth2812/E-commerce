import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CartProduct from '../../shared/components/CartProduct';
import { errorMessage } from '../../constant.json';
import { productSelector } from '../../reducers/products';
import Error from '../../shared/components/Errors';

const CartProducts = ({ errors }) => {
  const [cartProductsIds, setCartProductsIds] = useState([]);
  const stateProductList = useSelector((state) => productSelector(state));

  useEffect(() => {
    setCartProductsIds(stateProductList);
  }, [stateProductList]);

  const products = cartProductsIds.map((data) => (
    <div key={data.id}>
      <CartProduct data={data} />
    </div>
  ));

  return (
    <>
      <div className="section-container">
        {errors && <Error title={errorMessage} />}
        {products}
      </div>
    </>
  );
};

CartProducts.propTypes = {
  errors: PropTypes.bool.isRequired,
};

export default CartProducts;
