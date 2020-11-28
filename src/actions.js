import { normalize } from 'normalizr';
import api from './services/api';
import { PRODUCT_FETCHED } from './types';
import productSchema from './Schemas';

const productFetched = (data) => ({
  type: PRODUCT_FETCHED,
  data,
});

const fetchProducts = () => (dispatch) =>
  api
    .products()
    .then((products) =>
      dispatch(productFetched(normalize(products, [productSchema])))
    );

export default fetchProducts;
