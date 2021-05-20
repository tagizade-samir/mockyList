import { takeEvery, put, select, call } from 'redux-saga/effects';
import axiosGet from '../../../services/API';
import Utils from '../../../utils';
import { setUsersData } from '../../redux/users/actions';
import { ActionTypes } from './types';

function* workerGetMainData({ type, payload }) {
    try {
        const response = yield call(axiosGet, Utils.MAIN_URL);
        if (response?.data?.length) {
            yield put(setUsersData(response?.data));
        } else {

        }
    } catch (error) {
        console.warn('workerGetMainData --- >', error);
    }
}

export function* watchGetMainData() {
	yield takeEvery(ActionTypes.GET_MAIN_DATA, workerGetMainData);
}
