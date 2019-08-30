import { call, put, all, takeLatest } from 'redux-saga/effects';
import API from 'services/JsonServerAPI';

import { TYPES } from './reducer';
import {
  getCart,
  getCartSuccess,
  getCartFail,
  addToCartSuccess,
  addToCartFail,
  removeToCartSuccess,
  removeToCartFail,
  updateAmount,
  updateAmountSuccess,
  updateAmountFail,
  updateSubtotal,
  updateSubtotalSuccess,
  updateSubtotalFail,
} from './actions';

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

export function* addToCart({ id }) {
  try {
    // prettier-ignore
    const RESPONSE_CART = yield call(API.get, '/cart/'),
    RESPONSE_PRODUCT = yield call(API.get,  `/products/${id}`);

    let hasProduct = RESPONSE_CART.data.length === 0 ? false : true,
      foundCartProduct = RESPONSE_CART.data.find(product => product.id === id);

    // prettier-ignore
    if (hasProduct && foundCartProduct) {
      yield put(updateAmount(id, foundCartProduct.amount + 1));
      yield put(updateSubtotal(id));
    } else {
      yield call(API.post, '/cart', { id: id, amount: 1, subtotal: RESPONSE_PRODUCT.data.price });
      yield put(addToCartSuccess('Product added to cart!'));
      yield put(getCart());
    }
  } catch (error) {
    yield put(
      addToCartFail(error.response ? error.response.statusText : error.message)
    );
  }
}

export function* removeToCart({ id }) {
  try {
    yield call(API.delete, `/cart/${id}`);
    yield put(removeToCartSuccess('Product successfully removed from cart!'));
    yield put(getCart());
  } catch (error) {
    yield put(
      removeToCartFail(
        error.response ? error.response.statusText : error.message
      )
    );
  }
}

export function* updateProductAmount({ id, amount }) {
  try {
    const RESPONSE = yield call(API.get, `/stock/${id}`);

    if (amount > 0 && amount <= RESPONSE.data.amount) {
      yield call(API.patch, `/cart/${id}`, { amount: amount });
      yield put(updateAmountSuccess('Product quantity updated!'));
      yield put(updateSubtotal(id));
    } else {
      yield put(updateAmountFail('This product is no longer in stock!'));
    }
  } catch (error) {
    updateAmountFail(
      error.response ? error.response.statusText : error.message
    );
  }
}

export function* updateProductSubtotal({ id }) {
  try {
    const RESPONSE_PRODUCT = yield call(API.get, `/products/${id}`),
      RESPONSE_CART = yield call(API.get, `/cart/${id}`);

    yield call(API.patch, `/cart/${id}`, {
      subtotal: RESPONSE_PRODUCT.data.price * RESPONSE_CART.data.amount,
    });
    yield put(updateSubtotalSuccess('Product quantity updated!'));
    yield put(getCart());
  } catch (error) {
    updateSubtotalFail(
      error.response ? error.response.statusText : error.message
    );
  }
}

// prettier-ignore
export default all([
  takeLatest(TYPES.GET, getCartList),
  takeLatest(TYPES.ADD, addToCart),
  takeLatest(TYPES.REMOVE, removeToCart),
  takeLatest(TYPES.UPDATE_AMOUNT, updateProductAmount),
  takeLatest(TYPES.UPDATE_SUBTOTAL, updateProductSubtotal),
]);
