import { ActionTypes } from "./types";

interface InitialState {
	data: Array<any>;
}

const initialState = {
	data: [],
};

const usersReducer = (state: InitialState = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case ActionTypes.SET_USERS_DATA:
			return {
				...state,
				data: payload,
			};
		default:
			return state;
	}
};

export default usersReducer;
