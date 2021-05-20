import { AppStore } from '../types';

export const selectUsersData = (state: AppStore): Array<any> => state.users.data;