import axios from 'axios';

const axiosGet = (url: string): Promise<any> => {
	return axios.get(url);
};

export default axiosGet;
