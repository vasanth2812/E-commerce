import { createSelector } from 'reselect';
import { allcartProducts } from './cartProducts';
import { PRODUCT_FETCHED } from '../types';

// REDUCER
export function products(state = {}, action = {}) {
  switch (action.type) {
    case PRODUCT_FETCHED:
      return { ...state, ...action.data.entities.products };
    default:
      return state;
  }
}

// SELECTORS
export const productsSelector = (state) => state.products;

export const allproductsSelector = createSelector(
  productsSelector,
  (productsHash) => Object.values(productsHash)
);

export const productSelector = createSelector(
  productsSelector,
  allcartProducts,
  (productsHash, cartProducts) => {
    return cartProducts.map((product) => {
      return {
        ...productsHash[product.productId],
        quantity: product.quantity,
      };
    });
  }
);
