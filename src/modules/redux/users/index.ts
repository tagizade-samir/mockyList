import { CommonAction } from '../types';
import { ActionTypes, UsersReducer } from './types';

const initialState: UsersReducer = {
	data: [],
};

const usersReducer = (
	state: UsersReducer = initialState,
	action: CommonAction,
) => {
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
