import { AppStore } from '../types';

export const selectIsSplashShown = (state: AppStore): boolean =>
	state.app.isSplashShown;

export const selectCurrentUserId = (state: AppStore): number | null =>
	state.app.currentUserId;

export const selectSort = (state: AppStore): string => state.app.sort;
