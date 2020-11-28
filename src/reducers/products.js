import { createSelector } from 'reselect';

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
