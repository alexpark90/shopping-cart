import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'core/store/configure-store'
import { AppContainer } from 'containers'
import {loadProducts} from 'core/actions/actions-products'

const store = configureStore();

// load all products data as app root loaded
store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
