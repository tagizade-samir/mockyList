import { CommonAction } from '../types';
import { ActionTypes } from './types';

interface SetIsSplashShownInt {
	type: string;
	payload: boolean;
}

export const setIsSplashShown = (payload: boolean): SetIsSplashShownInt & CommonAction => {
	return {
		type: ActionTypes.SET_IS_SPLASH_SHOWN,
		payload,
	};
};

interface SetCurrentUserIdInt {
	type: string;
	payload: number;
}

export const setCurrentUserId = (payload: number): SetCurrentUserIdInt & CommonAction => {
	return {
		type: ActionTypes.SET_IS_SPLASH_SHOWN,
		payload,
	};
};
