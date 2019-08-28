import { all } from 'redux-saga/effects';

import Product from './Product/sagas';

// prettier-ignore
export default function* rootSaga() {
  yield all([
    Product
  ]);
}
