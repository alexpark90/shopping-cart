import { combineReducers } from 'redux';
import { uiReducer }       from './reducer-ui';
import { productsReducer } from './reducer-products';
import { cartReducer } from './reducer-cart';

const rootReducer = combineReducers({
  ui: uiReducer,
  products: productsReducer,
	cart: cartReducer
});

export default rootReducer;
