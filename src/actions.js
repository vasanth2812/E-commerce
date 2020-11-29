import { normalize } from 'normalizr';
import api from './services/api';
import { PRODUCT_FETCHED, CARTPRODUCTS_FETCHED } from './types';
import productSchema from './Schemas';

const productFetched = (data) => ({
  type: PRODUCT_FETCHED,
  data,
});

const cartProductFetched = (data) => ({
  type: CARTPRODUCTS_FETCHED,
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
      dispatch(cartProductFetched(normalize(products, [productSchema])))
    );
