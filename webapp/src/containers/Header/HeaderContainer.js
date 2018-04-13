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

  handleToggle =() => {
    this.props.actions.ui.openLeftNav();
  };

  shoppingCartClick = () => {
  	this.props.actions.ui.showCart();
  };

  render() {
    return (
      <div className={styles}>
        <header>
          <AppBar
            title={appConfig.appName}
            onLeftIconButtonClick={this.handleToggle}
            iconElementRight={
              <Badge
                  badgeContent={this.props.cart.itemsInCart.length}
                  primary={true}
              >
	              <IconButton tooltip="Open Shopping Cart" onClick={this.shoppingCartClick} >
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
    ui: state.ui,
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