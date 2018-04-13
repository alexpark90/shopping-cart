import constants from 'core/action-types';

const ORDER_API_URL = `http://localhost:8080/api/orders`;

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

export function clearCart() {
	return {
		type: constants.CLEAR_CART
	};
}

export const buyItemsInCartSuccess = json => ({
	type: constants.BUY_ITEMS_SUCCESS
});

export const buyItemsInCartFailure = error => ({
	type: constants.BUY_ITEMS_FAILURE,
	payload: error
});

export function buyItemsInCart(order) {

	return dispatch => {
		return fetch(ORDER_API_URL, {method : 'POST', body: { order }, mode: 'no-cors'})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(buyItemsInCartSuccess(json));
				return json;
			})
			.catch(error => dispatch(buyItemsInCartFailure(error)));
	};
}

function handleErrors(response) {
	if (!response.ok) {
		console.error(response.statusText);
		throw Error(response.statusText);
	}
	return response;
}
