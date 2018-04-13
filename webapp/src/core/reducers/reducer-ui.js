import constants from 'core/action-types';

const initialState = {
  showCart     : false,
  showConfirm  : false,
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {

  case constants.SHOW_CONFIRM_BOX:
    return Object.assign({}, state, {
	    showConfirm: true
    });

  case constants.CLOSE_CONFIRM_BOX:
    return Object.assign({}, state, {
	    showConfirm: false
    });

  case constants.SHOW_CART:
    return Object.assign({}, state, {
      showCart    : true
    });

  case constants.HIDE_CART:
    return Object.assign({}, state, {
      showCart     : false
    });

  default:
    return state;
  }
}