import { CommonAction } from '../types';
import { ActionTypes } from './types';

interface SetUsersDataInt {
	type: string;
	payload: Array<any>;
}

export const setUsersData = (payload: Array<any>): SetUsersDataInt & CommonAction => {
	return {
		type: ActionTypes.SET_USERS_DATA,
		payload,
	};
};
