// Used to store the movie details that were clicked
// Using an object because I am only working with 1 movie at a time
// Also using these details on the edit page for the 1 movie I am working with
const details = (state = { title: '', description: '', poster: '', array_agg: [] }, action) => {
	switch (action.type) {
		case 'SET_DETAILS':
			return {
				// update each of the properties with their new value that was sent over
				title: action.payload.title,
				description: action.payload.description,
				poster: action.payload.poster,
				array_agg: action.payload.array_agg,
			};
		default:
			return state;
	}
};

export default details;
