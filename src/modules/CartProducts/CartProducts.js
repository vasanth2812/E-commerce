import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from '../../shared/components/CartProduct';
import { errorMessage, addProductInfo } from '../../constant.json';
import { productSelector } from '../../reducers/products';
import Alert from '../../shared/components/Alerts/Alert';
import './CartProducts.scss';
import { addCart, removeCart } from '../../actions';

const CartProducts = ({ errors }) => {
  const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useState([]);
  const stateProductList = useSelector((state) => productSelector(state));

  useEffect(() => {
    setCartProducts(stateProductList);
  }, [stateProductList]);

  const selectQuantity = (productQuantity) => {
    if (productQuantity.quantity) {
      dispatch(addCart([productQuantity]));
    } else {
      dispatch(removeCart(productQuantity));
    }
  };

  const products = cartProducts.map((data) => (
    <div key={data.id}>
      <CartProduct data={data} selectQuantity={selectQuantity} />
    </div>
  ));

  const totalAmount = cartProducts.reduce(
    (accumulator, data) =>
      parseFloat(data.price) * parseFloat(data.quantity) + accumulator,
    0
  );

  return (
    <>
      <div className="section-container">
        {errors && <Alert title={errorMessage} color="danger" />}
        {cartProducts && cartProducts.length ? (
          <>
            <div className="cart-products">
              <div className="product-list-wrap">{products}</div>
              <div className="product-Billing-wrap">
                <div className="product-Billing-main">
                  <h4>Total cart Amount</h4>
                  <h5>{totalAmount.toFixed(2)}</h5>
                  <button type="button" className="checkout-btn" disabled>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Alert title={addProductInfo} color="info" />
        )}
      </div>
    </>
  );
};

CartProducts.propTypes = {
  errors: PropTypes.bool.isRequired,
};

export default CartProducts;
