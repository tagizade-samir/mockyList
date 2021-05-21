import { all, fork } from 'redux-saga/effects';
import { watchGetMainData } from './getMainData';

export default function* rootSaga() {
	try {
		yield all([fork(watchGetMainData)]);
	} catch (error) {
		console.warn('rootSaga: --- > ', error);
	}
}
