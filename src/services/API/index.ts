import axios from 'axios';
import { UserItem } from '../../modules/redux/users/types';

const axiosGet = (url: string): Promise<{ data: Array<UserItem> }> => {
	return axios.get(url);
};

export default axiosGet;
