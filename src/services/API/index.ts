import axios from 'axios';

const axiosGet = (url: string): Promise<{ data: Array<any> }> => {
	return axios.get(url);
};

export default axiosGet;
