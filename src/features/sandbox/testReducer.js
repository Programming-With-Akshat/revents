export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = (amount) => {
	return {
		type: INCREMENT_COUNTER,
		payload: amount
	};
};

export const decrement = (amount) => {
	return {
		type: DECREMENT_COUNTER,
		payload: amount
	};
};

const initialState = {
	data: 42
};

const testReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case INCREMENT_COUNTER:
			return {
				...state,
				data: state.data + payload
			};

		case DECREMENT_COUNTER:
			return {
				...state,
				data: state.data - payload
			};

		default:
			return state;
	}
};

export default testReducer;
