import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router-dom';
import {Badge, IconButton} from 'material-ui';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';

/* actions */
import * as uiActionCreators  from 'core/actions/actions-ui';

/* component styles */
import { styles } from './styles.scss';
import {appConfig} from "../../core/configs/config-app";
import AppBar from '../../components/AppBar/AppBar';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  shoppingCartClick = () => {
  	this.props.actions.ui.showCart();
  };

  render() {
	  const { cart } = this.props;
	  const numOfItemsInCart = cart.itemsInCart.length;

    return (
      <div className={styles}>
        <header>
          <AppBar
            title={appConfig.appName}
            iconElementRight={
              <Badge
                  badgeContent={numOfItemsInCart}
                  primary={true}
              >
	              <IconButton tooltip="Open Shopping Cart"
	                          onClick={this.shoppingCartClick}
	                          disabled={numOfItemsInCart == 0}>
                  <ShoppingCartIcon />
                </IconButton>
              </Badge>}
          />
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
