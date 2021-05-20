export interface AppStore {
	app: {
		isSplashShown: boolean;
	};
	users: {
		data: Array<any>;
	};
}
