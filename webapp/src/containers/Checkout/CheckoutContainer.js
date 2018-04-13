import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RemoveCircleIcon from 'material-ui/svg-icons/content/remove-circle';

import * as uiActionCreators from 'core/actions/actions-ui';
import * as cartActionCreators from 'core/actions/actions-cart';
import {withRouter} from 'react-router-dom';

/* component styles */
import { styles } from './styles.scss'
import {Avatar, Dialog, Divider, IconButton, List, ListItem, Paper, RaisedButton, TextField} from 'material-ui';
import Link from 'react-router-dom/es/Link';

class CheckoutContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			order : {
				customerName : undefined,
				email : undefined,
				orderDate : new Date().toJSON().slice(0,10).replace(/-/g,'/'),
				status : 'Order Received',
				totalPrice : props.cart.total,
				items : props.cart.itemsInCart.map(i => Object.assign({}, { productId: i.id, quantity: i.qty}))
			}
		}
	}

	removeItem=(item) => {
		this.props.actions.cart.removeItemFromCart(item);
	};

	buyItems = (cartItems, total) => {

		// this.props.actions.cart.buyItemsInCart({ customerName, email, orderDate, totalPrice, items});
		this.props.actions.ui.showConfirmBox();
	};

	handleClose = () => {
		this.props.actions.ui.closeConfirmBox();
	};

	handleValueChange = (event) => {
		const value = event.target.value;
		this.setState(Object.assign({}, ...this.state, { order : { customerName : value} }));
	};

	mapCartItems = (cartItems) => {
		return (
			<List>
				{cartItems.map((item) =>
					<ListItem
						disabled
						key={item.id}
						primaryText={<div>{item.name} <strong> | Qty: {item.qty}</strong></div>}
						secondaryText={<div>&#36;<b>{item.price}</b> CAD</div>}
						leftAvatar={<Avatar src={"src/assets/images/" + item.imageUrl} />}
						rightIconButton={<IconButton tooltip="Remove Item" onClick={() => this.removeItem(item)}><RemoveCircleIcon /></IconButton>}
					>
					</ListItem>
				)}
			</List>
		)
	};

	render() {
		const { cart, ui } = this.props;

		console.log('this.state :', this.state.order);

		const buttons = [
			<RaisedButton
				label="OK"
				primary={true}
				keyboardFocused={true}
				onClick={this.handleClose}
			/>,
		];

		return (
			<div className={styles}>
				<Paper zDepth={2} className='paper'>
					<h2 className='header'>Check your order details</h2>
					<br />
					<br />
					{this.mapCartItems(cart.itemsInCart)}
					<Divider />
					<TextField hintText="Enter Your Name Here"
					           name="customerName"
					           className='text-field'
					           onChange={() => this.handleValueChange()}
					           underlineShow={false} />
					<Divider />
					<TextField hintText="Enter Your Email Here"
					           name="email"
					           className='text-field'
					           onChange={() => this.handleValueChange()}
					           underlineShow={false}  />
					<Divider />
					<br />
					<h3 className='header'>Total : {cart.total.toFixed(2)} CAD</h3>
					<RaisedButton
						className='button'
						primary={true}
						label='Buy'
						onClick={() => this.buyItems()}
						disabled={cart.itemsInCart.length == 0} />
					<Link to='/home' className='button'>
						<RaisedButton
							primary={true}
							label='Keep Shopping' />
					</Link>
				</Paper>
				<Dialog
					title="Dialog With Actions"
					actions={buttons}
					open={ui.showConfirm}
					onRequestClose={this.handleClose}>
					<p>{JSON.stringify(this.state.order)}</p>
				</Dialog>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart,
		ui: state.ui
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			ui: bindActionCreators(uiActionCreators, dispatch),
			cart: bindActionCreators(cartActionCreators, dispatch)
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer));