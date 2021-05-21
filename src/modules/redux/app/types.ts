export const ActionTypes = {
	SET_IS_SPLASH_SHOWN: 'SET_IS_SPLASH_SHOWN',
	SET_CURRENT_USER_ID: 'SET_CURRENT_USER_ID',
};

export interface AppReducer {
	isSplashShown: boolean;
	currentUserId: number | null;
}
