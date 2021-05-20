import { ActionTypes } from './types';

interface SetIsSplashShownInt {
	type: string;
	value: boolean;
}

export const setIsSplashShown = (value: boolean): SetIsSplashShownInt => {
	return {
		type: ActionTypes.SET_IS_SPLASH_SHOWN,
		value,
	};
};
