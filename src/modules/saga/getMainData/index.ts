import { Alert } from 'react-native';
import { takeEvery, put, select, call } from 'redux-saga/effects';
import axiosGet from '../../../services/API';
import Utils from '../../../utils';
import { setUsersData } from '../../redux/users/actions';
import { ActionTypes } from './types';

function* workerGetMainData() {
	try {
		const response = yield call(axiosGet, Utils.MAIN_URL);
		if (response?.data?.length) {
			// get data from api and if it is valid, set it to Redux store
			yield put(setUsersData(response?.data));
		} else {
			Alert.alert('Something went wrong, try again later');
		}
	} catch (error) {
		console.warn('workerGetMainData --- >', error);
	}
}

export function* watchGetMainData() {
	yield takeEvery(ActionTypes.GET_MAIN_DATA, workerGetMainData);
}
