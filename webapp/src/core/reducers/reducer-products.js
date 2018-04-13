import constants from 'core/action-types';

const initialState = {
	productList : []
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {

  case constants.PRODUCTS_FETCHED :
    return Object.assign({}, state, {
      productList: action.payload
    });

  default:
    return state;
  }
}