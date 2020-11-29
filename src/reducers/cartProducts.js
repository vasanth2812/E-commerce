import { createSelector } from 'reselect';

import { CARTPRODUCTS_FETCHED } from '../types';

// REDUCER
export function cartProducts(state = {}, action = {}) {
  switch (action.type) {
    case CARTPRODUCTS_FETCHED:
      return { ...state, ...action.data.entities.products };
    default:
      return state;
  }
}

export const cartProductsSelector = (state) => state.cartProducts;

export const allcartProducts = createSelector(
  cartProductsSelector,
  (productsHash) => Object.values(productsHash)
);
