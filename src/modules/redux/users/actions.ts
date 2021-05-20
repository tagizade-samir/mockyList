import { ActionTypes } from './types';

interface SetUsersDataInt {
	type: string;
	payload: Array<any>;
}

export const setUsersData = (payload: Array<any>): SetUsersDataInt => {
	return {
		type: ActionTypes.SET_USERS_DATA,
		payload,
	};
};
