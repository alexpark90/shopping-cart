import React from 'react';
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

const ProductList = ({props, addToCart}) => {
	const { products, history } = props;

	const handleTileClick = (item) => {
		addToCart(item);
		history.push("/checkout");
	};

	const mapToTile = (productList) => {
		return (productList.map((item) =>
			<GridTile
				key={item.id}
				title={item.name}
				subtitle={<strong>Price: <b>{item.price}</b> CAD</strong>}
				actionIcon={<FlatButton label="Add to Cart" onClick={() => addToCart(item)} rippleColor={'red'} />
				}
			>
				<img src={"src/assets/images/" + item.imageUrl} onClick={() => handleTileClick(item)}/>
			</GridTile>
		))
	};

	return (
    <div style={styles.root}>
      <GridList
          cellHeight={300}
          cols={3}
          padding={30}
      >
	      {mapToTile(products.productList)}
      </GridList>
    </div>
	)
};

export default ProductList;
