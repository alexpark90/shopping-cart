import constants from 'core/types';

export function loadProducts() {
  return {
    type: constants.PRODUCTS_FETCHING,
    payload: mock
  }
}


const mock = [
	{
		id: 'id1',
		name: 'sticker1',
		imageUrl: 'http://placehold.it/50x50',
		price: '66123',
	},
	{
		id: 'id2',
		name: 'sticker2',
		imageUrl: 'http://placehold.it/50x50',
		price: '66123',
	},
	{
		id: 'id3',
		name: 'sticker3',
		imageUrl: 'http://placehold.it/50x50',
		price: '66123',
	},
	{
		id: 'id4',
		name: 'sticker4',
		imageUrl: 'http://placehold.it/50x50',
		price: '66123',
	},
	{
		id: 'id5',
		name: 'sticker5',
		imageUrl: 'http://placehold.it/50x50',
		price: '66123',
	},
	{
		id: 'id6',
		name: 'sticker6',
		imageUrl: 'http://placehold.it/50x50',
		price: '66123',
	},
	{
		id: 'id7',
		name: 'sticker7',
		imageUrl: 'http://placehold.it/50x50',
		price: '66123',
	},
	{
		id: 'id8',
		name: 'sticker8',
		imageUrl: 'http://placehold.it/50x50',
		price: '66123',
	},
];