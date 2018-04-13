import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RemoveCircleIcon from 'material-ui/svg-icons/content/remove-circle';

import * as uiActionCreators from 'core/actions/actions-ui';
import * as cartActionCreators from 'core/actions/actions-cart';
import {withRouter} from 'react-router-dom';

/* component styles */
import { styles } from './styles.scss'
import {Avatar, IconButton, List, ListItem, Paper, RaisedButton} from 'material-ui';
import Link from 'react-router-dom/es/Link';

class CheckoutContainer extends Component {
	constructor(props) {
		super(props);
	}

	mapCartItems = (cartItems) => {
		return (
			<List>
				{cartItems.map((item) =>
					<ListItem
						onClick={() => console.log('just got clicked')} disabled
						key={item.id}
						primaryText={item.name}
						secondaryText={<span><b>{item.price}</b> CAD</span>}
						leftAvatar={<Avatar src={item.imageUrl} />}
						rightIconButton={<IconButton tooltip="Remove Item" onClick={() => this.removeItem(item)}><RemoveCircleIcon /></IconButton>}
					>
					</ListItem>
				)}
			</List>
		)
	};

	render() {
		const { cart } = this.props;

		return (
			<div className={styles}>
				<Paper zDepth={2}>
					{this.mapCartItems(cart.itemsInCart)}
					<RaisedButton
						primary={true}
						label='Buy Now' />
					<Link to='/home'>
						<RaisedButton
							primary={true}
							label='Keep Shopping' />
					</Link>
				</Paper>
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
			ui: bindActionCreators(uiActionCreators, dispatch),
			cart: bindActionCreators(cartActionCreators, dispatch)
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer));