import { call, put, all, takeLatest } from 'redux-saga/effects';
import API from 'services/JsonServerAPI';

import { TYPES } from './reducer';
import { getProductSuccess } from './actions';

export function* getAllProducts() {
  const response = yield call(API.get, 'products');

  yield put(getProductSuccess(response.data));
}

// prettier-ignore
export default all([
  takeLatest(TYPES.GET, getAllProducts)
]);
