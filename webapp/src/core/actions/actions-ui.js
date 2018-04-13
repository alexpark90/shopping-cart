import constants from 'core/action-types';

/**
 * openLeftNav - Open the left side nav
 */
export function showConfirmBox() {
  return {
    type: constants.SHOW_CONFIRM_BOX
  };
}

/**
 * closeLeftNav - Close the left side nav
 */
export function closeConfirmBox() {
  return {
    type: constants.CLOSE_CONFIRM_BOX
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
export function showCart() {
  return {
    type        : constants.SHOW_CART,
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