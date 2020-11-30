import React from 'react';
import PropTypes from 'prop-types';
import './CartProduct.scss';

const CartProduct = ({ data, selectQuantity }) => {
  const Quantity = (productId, quantity) => {
    const selectdata = {
      productId,
      quantity,
    };
    selectQuantity(selectdata);
  };
  return (
    <>
      <div className="cart-product-wrap">
        <div className="cart-product-main">
          <div className="cart-left-wrap">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="cart-right-wrap">
            <h5>{data.title}</h5>
            <h6>
              <span>₹ </span>
              {data.price}
            </h6>
            <div>
              <select
                value={data.quantity}
                className="select-wrap-field"
                onChange={(e) => Quantity(data.id, Number(e.target.value))}
              >
                <option value="0"> 0 (Delete) </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="total-price-wrap">
              <h6>
                <span>Total- ₹</span>
                {data.price * data.quantity}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CartProduct.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  selectQuantity: PropTypes.func.isRequired,
};

export default CartProduct;
