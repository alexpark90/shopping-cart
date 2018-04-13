import constants from 'core/action-types';

const initialState = {
  itemsInCart: [],
	total: 0
};

export function cartReducer (state = initialState, action) {
	const item = action.payload;
	const prevTotal = state.total;
	let qty;

  switch (action.type) {

	  case constants.BUY_ITEMS_SUCCESS :
	  case constants.CLEAR_CART :
		  return initialState;

	  case constants.REMOVE_FROM_CART :
		  return Object.assign({}, state, {
			  itemsInCart: state.itemsInCart.slice().filter(i => i.id !== item.id),
			  total : prevTotal - (item.price * item.qty)
		  });

	  case constants.ADD_TO_CART :

	    const index = state.itemsInCart.findIndex(i => i.id === item.id);
	    let copy = Object.assign({}, state);

	    if (index > -1) {
				qty = copy.itemsInCart[index].qty + 1;
				copy.itemsInCart = state.itemsInCart.slice().filter(i => i.id != item.id);
		  } else {
	      qty = 1;
		  }

		  return Object.assign({}, state, {
		  	itemsInCart: [ ...copy.itemsInCart, { ...item, qty}],
			  total: prevTotal + item.price
		  });

  default:
    return state;
  }
}