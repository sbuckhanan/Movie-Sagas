// Used to store movies returned from the server
const search = (state = [], action) => {
	switch (action.type) {
		case 'SET_SEARCH':
			return action.payload;
		default:
			return state;
	}
};

export default search;
