import { AppStore } from '../types';
import { UserItem } from './types';

export const selectUsersData = (state: AppStore): Array<UserItem> =>
	state.users.data;

export const selectUser =
	(userId: number) =>
	(state: AppStore): UserItem | undefined =>
		state.users.data.find(user => user.id === userId);
