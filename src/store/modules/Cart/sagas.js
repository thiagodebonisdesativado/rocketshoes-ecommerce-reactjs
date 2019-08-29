import { call, put, all, takeLatest } from 'redux-saga/effects';

import { TYPES } from './reducer';
import {
  getCart,
  getCartSuccess,
  getCartFail,
  updateAmount,
  updateAmountSuccess,
  updateAmountFail,
  addToCartSuccess,
  addToCartFail,
} from './actions';
import API from 'services/JsonServerAPI';

export function* getCartList() {
  try {
    const response = yield call(API.get, '/cart');
    yield put(getCartSuccess('Cart Loaded!', response.data));
  } catch (error) {
    yield put(
      getCartFail(error.response ? error.response.statusText : error.message)
    );
  }
}

export function* updateProductAmount({ id, amount }) {
  try {
    yield call(API.patch, `/cart/${id}`, { amount: amount });
    yield put(updateAmountSuccess('Product quantity updated!'));
    yield put(getCart());
  } catch (error) {
    updateAmountFail(
      error.response ? error.response.statusText : error.message
    );
  }
}

export function* addToCart({ id }) {
  try {
    // prettier-ignore
    const RESPONSE_PRODUCT = yield call(API.get, '/cart/');

    // prettier-ignore
    let hasProduct = RESPONSE_PRODUCT.data.length === 0 ? false : true,
    foundCartProduct = RESPONSE_PRODUCT.data.find(product => product.id === id);

    // prettier-ignore
    if (hasProduct && foundCartProduct) {
      const RESPONSE_STOCK_AMOUNT = yield call(API.get, `/stock?id=${id}`);

      if(foundCartProduct.amount <  RESPONSE_STOCK_AMOUNT.data[0].amount) {
        yield put(updateAmount(id, foundCartProduct.amount + 1));
      } else {
        yield put(updateAmountFail('This product is no longer in stock!'));
      }
    } else {
      yield call(API.post, '/cart', { id: id, amount: 1 });
      yield put(addToCartSuccess('Product added to cart!'));
      yield put(getCart());
    }
  } catch (error) {
    yield put(
      addToCartFail(error.response ? error.response.statusText : error.message)
    );
  }
}

// prettier-ignore
export default all([
  takeLatest(TYPES.GET, getCartList),
  takeLatest(TYPES.UPDATE_AMOUNT, updateProductAmount),
  takeLatest(TYPES.ADD, addToCart)
]);
