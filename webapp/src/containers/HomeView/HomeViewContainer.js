import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { VacHistoryContainer, VaccineFormContainer } from 'containers'
/* component styles */
import { styles } from './styles.scss'

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui';
import * as productsActionCreators from 'core/actions/actions-products';
import * as cartActionCreators from 'core/actions/actions-cart';
import ProductList from '../../components/ProductList/ProductList';

class HomeViewContainer extends Component {
  constructor (props) {
    super(props);
  }

  addToCart = (item) => {
  	this.props.actions.cart.addItemToCart(item);
  };

  render () {
    return (
      <div>
        <ProductList props = {this.props.products} addToCart = {this.addToCart} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    ui: state.ui,
	  products: state.products
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch),
      products: bindActionCreators(productsActionCreators, dispatch),
      cart: bindActionCreators(cartActionCreators, dispatch)
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeViewContainer)
)
