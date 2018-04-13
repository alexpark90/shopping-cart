import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'core/store/configureStore'
import { AppContainer } from 'containers'
import {loadProducts} from 'core/actions/actions-products'

const store = configureStore();

store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
