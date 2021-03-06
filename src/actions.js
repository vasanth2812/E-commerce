import { normalize } from 'normalizr';
import api from './services/api';
import {
  PRODUCT_FETCHED,
  CARTPRODUCTS_FETCHED,
  ADD_CARTPRODUCTS,
  REMOVE_CARTPRODUCTS,
} from './types';
import { productSchema, cartProductSchema } from './Schemas';

const productFetched = (data) => ({
  type: PRODUCT_FETCHED,
  data,
});

const cartProductFetched = (data) => ({
  type: CARTPRODUCTS_FETCHED,
  data,
});

const addCartProduct = (data) => ({
  type: ADD_CARTPRODUCTS,
  data,
});

const removeCartProduct = (data) => ({
  type: REMOVE_CARTPRODUCTS,
  data,
});

export const fetchProducts = () => (dispatch) =>
  api
    .products()
    .then((products) =>
      dispatch(productFetched(normalize(products, [productSchema])))
    );

export const fetchCartProducts = () => (dispatch) =>
  api
    .cartProducts()
    .then((products) =>
      dispatch(cartProductFetched(normalize(products, [cartProductSchema])))
    );

export const addCart = (product) =>
  addCartProduct(normalize(product, [cartProductSchema]));

export const removeCart = (data) => removeCartProduct(data);
