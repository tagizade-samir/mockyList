import { CommonAction } from '../types';
import { ActionTypes, AppReducer } from './types';

const initialState: AppReducer = {
	isSplashShown: true,
	currentUserId: null,
	sort: 'none',
};

const appReducer = (state: AppReducer = initialState, action: CommonAction) => {
	const { payload, type } = action;
	switch (type) {
		case ActionTypes.SET_IS_SPLASH_SHOWN:
			return {
				...state,
				isSplashShown: payload,
			};
		case ActionTypes.SET_CURRENT_USER_ID:
			return {
				...state,
				currentUserId: payload,
			};
		case ActionTypes.SET_SORT:
			return {
				...state,
				sort: payload,
			};
		default:
			return state;
	}
};

export default appReducer;
