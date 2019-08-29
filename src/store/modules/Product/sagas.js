import { call, put, all, takeLatest } from 'redux-saga/effects';

import { TYPES } from './reducer';
import { getProductSuccess } from './actions';
import API from 'services/JsonServerAPI';

export function* getAllProducts() {
  const response = yield call(API.get, 'products');

  yield put(getProductSuccess(response.data));
}

// prettier-ignore
export default all([
  takeLatest(TYPES.GET, getAllProducts)
]);
