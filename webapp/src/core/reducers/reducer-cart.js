import constants from 'core/types';

const initialState = {
  itemsInCart: []
};

export function cartReducer (state = initialState, action) {

  switch (action.type) {

  case constants.ADD_TO_CART :
  return Object.assign({}, state, {
    itemsInCart: [ ...state.itemsInCart, action.payload]
  });

  case constants.REMOVE_FROM_CART :
	  return Object.assign({}, state, {
		  itemsInCart: state.itemsInCart.filter(i => i.id !== action.payload.id)
	  });
	  
  default:
    return state;
  }
}