import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CartProduct from '../../shared/components/CartProduct';
import { errorMessage } from '../../constant.json';
import { productSelector } from '../../reducers/products';
import Alert from '../../shared/components/Alerts/Alert';
import './CartProducts.scss';

const CartProducts = ({ errors }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const stateProductList = useSelector((state) => productSelector(state));

  useEffect(() => {
    setCartProducts(stateProductList);
  }, [stateProductList]);

  const products = cartProducts.map((data) => (
    <div key={data.id}>
      <CartProduct data={data} />
    </div>
  ));

  return (
    <>
      <div className="section-container">
        {errors && <Alert title={errorMessage} color="danger" />}
        <div className="cart-products">
          <div className="product-list-wrap">{products}</div>
          <div className="product-Billing-wrap" />
        </div>
      </div>
    </>
  );
};

CartProducts.propTypes = {
  errors: PropTypes.bool.isRequired,
};

export default CartProducts;
