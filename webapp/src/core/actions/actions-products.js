import constants from 'core/action-types';

const API_URL = "http://localhost:8080/api";
const PRODUCTS_API_URL = `${API_URL}/products`;

export function loadProducts() {
	return dispatch => {
		return fetch(PRODUCTS_API_URL)
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(fetchProductsSuccess(json));
				return json;
			})
			.catch(error => dispatch(fetchProductsFailure(error)));
	};
}

export const fetchProductsSuccess = products => ({
	type: constants.PRODUCTS_FETCHED,
	payload: products
});

export const fetchProductsFailure = error => ({
	type: constants.PRODUCTS_FETCHED,
	payload: error
});

function handleErrors(response) {
	if (!response.ok) {
		console.error(response.statusText);
		throw Error(response.statusText);
	}
	return response;
}