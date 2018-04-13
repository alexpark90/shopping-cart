import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Avatar, Dialog, FlatButton, IconButton, List, ListItem, TextField} from 'material-ui';
import RemoveCircleIcon from 'material-ui/svg-icons/content/remove-circle';

import * as uiActionCreators from 'core/actions/actions-ui';
import * as cartActionCreators from 'core/actions/actions-cart';

/* component styles */
import { styles } from './styles.scss';
import Link from 'react-router-dom/es/Link';

class CartContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleClose=() => {
    this.props.actions.ui.closeCart();
  };

	removeItem=(item) => {
		this.props.actions.cart.removeItemFromCart(item);
	};

	handleChange = () => event => {
		console.log('value', event.target.value);
	};

	mapCartItems = (cartItems) => {
		return (
			<List>
				{cartItems.map((item) =>
				<ListItem
					disabled
					key={item.id}
					primaryText={<span>{item.name}
													<TextField
														id={'qty'}
														label='Quantity'
														value={item.qty}
														style={{width: 40, display: 'inline-block', margin: 30}}
														onChange={this.handleChange()}
														type='number'
													/>
												</span>}
					secondaryText={<span>&#36;<b>{item.price}</b> CAD</span>}
					leftAvatar={<Avatar src={"src/assets/images/" + item.imageUrl} />}
					rightIcon={<IconButton tooltip="Remove Item"
					                       onClick={() => this.removeItem(item)}>
												<RemoveCircleIcon />
											</IconButton>}
				>
				</ListItem>
				)}
			</List>
		)
	};

  render() {
    const { ui, cart } = this.props;

	  const buttons = [
		  <Link to='/checkout'>
			  <FlatButton
				  primary={true}
				  label='Buy Now'
				  onClick={this.handleClose}
				  disabled={cart.itemsInCart.length == 0}
			  />
		  </Link>,
		  <FlatButton
			  label="Save and Keep Shopping"
			  primary={true}
			  keyboardFocused={true}
			  onClick={this.handleClose}
		  />,
	  ];

    return(
      <div>
        <Dialog
          title="Shopping Cart"
          actions={buttons}
          className={styles}
          open={ui.showCart}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}>
	        {this.mapCartItems(cart.itemsInCart)}
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps (state) {
	return {
		ui: state.ui,
		cart: state.cart
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: {
			ui: bindActionCreators(uiActionCreators, dispatch),
			cart: bindActionCreators(cartActionCreators, dispatch)
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);