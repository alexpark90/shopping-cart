import constants from 'core/types';

export function loadProducts() {
  return {
    type: constants.LOAD_PRODUCTS_LIST,
    payload: {}
  };
}