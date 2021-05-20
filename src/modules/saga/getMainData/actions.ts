import { ActionTypes } from './types';

interface GetMainDataSagaInt {
	type: string;
}

export const getMainDataSaga = (): GetMainDataSagaInt => {
	return {
		type: ActionTypes.GET_MAIN_DATA,
	};
};
