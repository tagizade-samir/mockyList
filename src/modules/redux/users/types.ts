export const ActionTypes = {
	SET_USERS_DATA: 'SET_USERS_DATA',
};

export interface UsersReducer {
	data: Array<UserItem>;
}

export interface UserItem {
	id: number;
	img: string;
	status: string;
	email: string;
	full_name: string;
	phone_number: string;
	username: string;
	desc: string;
	rating: number;
	work: {
		company: string;
		start_date: string;
		department: string;
		position: string;
	};
	address: {
		city: string;
		country: string;
	};
}
