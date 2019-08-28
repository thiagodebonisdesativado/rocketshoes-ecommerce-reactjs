import { all } from 'redux-saga/effects';

import Cart from './Cart/sagas';

export default function* rootSaga() {
  yield all([Cart]);
}
