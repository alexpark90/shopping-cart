import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import ProductList from '../../components/ProductList/ProductList';

/* component styles */
import { styles } from './styles.scss'

/* actions */
import * as cartActionCreators from 'core/actions/actions-cart';

class HomeContainer extends Component {
  constructor (props) {
    super(props);
  }

  addToCart = (item) => {
  	this.props.actions.cart.addItemToCart(item);
  };

  render () {
    return (
      <div>
        <ProductList props = { this.props } addToCart = {this.addToCart} />
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
      cart: bindActionCreators(cartActionCreators, dispatch)
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
)
