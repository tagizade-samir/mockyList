import { AppReducer } from './app/types';
import { UsersReducer } from './users/types';

export interface AppStore {
	app: AppReducer;
	users: UsersReducer;
}

export interface CommonAction {
	type: string;
	payload: any;
}
