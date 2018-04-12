import React, { Component }   from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { FlatButton } from 'material-ui';

const styles = {
	root: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	}
};

const ProductItem = (props) => {

	const item = props.props;

	return (
		<GridTile
			key={item.id}
			title={item.name}
			subtitle={<strong>Price: <b>{item.price}</b> CAD</strong>}
			actionIcon={<FlatButton label="Buy Now"/>}
		>
			<img src={item.imageUrl}/>
		</GridTile>
	)
};

export default ProductItem;
