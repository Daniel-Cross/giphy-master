import { SEARCH_SUCCESS } from '../services/actions';

const initialState = {
	results: [],
};

export default (state, action) => {
	if (state === undefined) {
		return initialState;
	}
	switch (action.type) {
		case SEARCH_SUCCESS:
			return {
				...state,
				results: action.results,
			};
		default:
			return state;
	}
};
