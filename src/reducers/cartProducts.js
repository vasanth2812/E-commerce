import { createSelector } from 'reselect';

import { CARTPRODUCTS_FETCHED, ADD_CARTPRODUCTS } from '../types';

// REDUCER
export function cartProducts(state = {}, action = {}) {
  switch (action.type) {
    case CARTPRODUCTS_FETCHED:
      return { ...state, ...action.data.entities.products };
    case ADD_CARTPRODUCTS: {
      return { ...state, ...action.data.entities.products };
    }
    default:
      return state;
  }
}

export const cartProductsSelector = (state) => state.cartProducts;

export const allcartProducts = createSelector(
  cartProductsSelector,
  (productsHash) => Object.values(productsHash)
);

export const allCartProductsId = createSelector(
  cartProductsSelector,
  (productsHash) => Object.keys(productsHash)
);
