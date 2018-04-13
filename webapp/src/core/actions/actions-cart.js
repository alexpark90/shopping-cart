import constants from 'core/types';

export function addItemToCart(item) {
  return {
    type: constants.ADD_TO_CART,
    payload: item
  };
}

export function removeItemFromCart(item) {
	return {
		type: constants.REMOVE_FROM_CART,
		payload: item
	};
}
