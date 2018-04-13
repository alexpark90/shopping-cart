import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Avatar, Dialog, FlatButton, IconButton, List, ListItem, TextField} from 'material-ui';
import RemoveCircleIcon from 'material-ui/svg-icons/content/remove-circle';

import * as uiActionCreators from 'core/actions/actions-ui';
import * as cartActionCreators from 'core/actions/actions-cart';

/* component styles */
import { styles } from './styles.scss';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
  }

  goToCheckout=() => {

  };

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
					onClick={() => console.log('just got clicked')} disabled
					key={item.id}
					primaryText={item.name}
					secondaryText={<span><b>{item.price}</b> CAD</span>}
					rightAvatar={<Avatar src={item.imageUrl} />}
					leftIcon={<IconButton tooltip="Remove Item" onClick={() => this.removeItem(item)}><RemoveCircleIcon /></IconButton>}
				>
					<TextField
						label='Quantity'
						value={item.price}
						style={{width: 50}}
						onChange={this.handleChange()}
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</ListItem>
				)}
			</List>
		)
	};

  render() {
    const { ui, cart, actions } = this.props;

	  const buttons = [
		  <FlatButton
			  label="Checkout"
			  primary={true}
			  onClick={this.goToCheckout}
		  />,
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
          onRequestClose={this.handleClose}>
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


export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);