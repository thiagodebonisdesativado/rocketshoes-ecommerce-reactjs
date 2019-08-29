import { all } from 'redux-saga/effects';

import Product from './Product/sagas';
import Cart from './Cart/sagas';

// prettier-ignore
export default function* rootSaga() {
  yield all([
    Product,
    Cart
  ]);
}
