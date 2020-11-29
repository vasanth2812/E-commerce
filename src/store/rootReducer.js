import { combineReducers } from 'redux';
import { products } from '../reducers/products';
import { cartProducts } from '../reducers/cartProducts';

export default combineReducers({
  products,
  cartProducts,
});
