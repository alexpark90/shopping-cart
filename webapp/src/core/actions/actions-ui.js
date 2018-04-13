import constants from 'core/types';

/**
 * openLeftNav - Open the left side nav
 */
export function openLeftNav() {
  return {
    type: constants.OPEN_LEFT_NAV
  };
}

/**
 * closeLeftNav - Close the left side nav
 */
export function closeLeftNav() {
  return {
    type: constants.CLOSE_LEFT_NAV
  };
}

/**
 * clear - Just clear the UI
 */
export function clear() {
  return {
    type: constants.CLEAR_UI
  };
}

/**
 * showModal - Open the modal
 */
export function showCart(obj) {
  return {
    type        : constants.SHOW_CART,
    payload     : obj
  };
}

/**
 * closeConfirm - Close the confirmation modal
 */
export function closeCart() {
  return {
    type: constants.HIDE_CART
  };
}