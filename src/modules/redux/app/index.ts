import { ActionTypes } from "./types";

interface InitialState {
	isSplashShown: boolean;
}

const initialState = {
	isSplashShown: true,
};

const appReducer = (state: InitialState = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case ActionTypes.SET_IS_SPLASH_SHOWN:
			return {
				...state,
				isSplashShown: payload,
			};
		default:
			return state;
	}
};

export default appReducer;
