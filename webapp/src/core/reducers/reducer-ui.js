import constants from 'core/types';

const initialState = {
  leftNavOpen  : false,
  rightNavOpen : false,
  showCart     : false,
  modalActions : [],
  modalTitle   : '',
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {

  case constants.OPEN_LEFT_NAV:
    return Object.assign({}, state, {
      leftNavOpen: true
    });

  case constants.CLOSE_LEFT_NAV:
    return Object.assign({}, state, {
      leftNavOpen: false
    });

  case constants.CLEAR_UI:
    return Object.assign({}, state, {
      leftNavOpen : false,
      rightNavOpen: false,
      showCart    : false,
      modalActions : [],
      modalTitle : ''
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