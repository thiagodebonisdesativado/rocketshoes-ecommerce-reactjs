import { call, put, all, takeLatest } from 'redux-saga/effects';
import API from 'services/JsonServerAPI';
import { toast } from 'react-toastify';

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
    let errorMessage = error.response
      ? error.response.statusText
      : error.message;

    yield put(getCartFail(errorMessage));
    toast.error(errorMessage);
  }
}

export function* addToCart({ id }) {
  try {
    // prettier-ignore
    const RESPONSE_CART = yield call(API.get, '/cart/'),
    RESPONSE_PRODUCT = yield call(API.get,  `/products/${id}`);

    let hasProduct = RESPONSE_CART.data.length === 0 ? false : true,
      foundCartProduct = RESPONSE_CART.data.find(product => product.id === id),
      productPrice = RESPONSE_PRODUCT.data.price;

    // prettier-ignore
    if (hasProduct && foundCartProduct) {
      yield put(updateAmount(id, foundCartProduct.amount + 1));
    } else {
      yield call(API.post, '/cart', { id: id, amount: 1, subtotal: productPrice });
      yield put(addToCartSuccess('Product added to cart!'));
      yield put(getCart());

      toast.success('Product added to cart!');
    }
  } catch (error) {
    let errorMessage = error.response
      ? error.response.statusText
      : error.message;

    yield put(addToCartFail(errorMessage));
    toast.error(errorMessage);
  }
}

export function* removeToCart({ id }) {
  try {
    yield call(API.delete, `/cart/${id}`);
    yield put(removeToCartSuccess('Product removed from cart!'));
    yield put(getCart());

    toast.success('Product removed from cart!');
  } catch (error) {
    let errorMessage = error.response
      ? error.response.statusText
      : error.message;

    yield put(removeToCartFail(errorMessage));
    toast.error(errorMessage);
  }
}

export function* updateProductAmount({ id, amount }) {
  try {
    const RESPONSE = yield call(API.get, `/stock/${id}`);

    if (amount > 0 && amount <= RESPONSE.data.amount) {
      yield call(API.patch, `/cart/${id}`, { amount: amount });
      yield put(updateAmountSuccess('Product quantity updated!'));
      yield put(updateSubtotal(id));

      toast.success('Product quantity updated!');
    } else {
      yield put(updateAmountFail('This product is no longer in stock!'));
      toast.error('This product is no longer in stock!');
    }
  } catch (error) {
    let errorMessage = error.response
      ? error.response.statusText
      : error.message;

    yield put(updateAmountFail(errorMessage));
    toast.error(errorMessage);
  }
}

export function* updateProductSubtotal({ id }) {
  try {
    const RESPONSE_PRODUCT = yield call(API.get, `/products/${id}`),
      RESPONSE_CART = yield call(API.get, `/cart/${id}`);

    let subtotal = RESPONSE_PRODUCT.data.price * RESPONSE_CART.data.amount;

    yield call(API.patch, `/cart/${id}`, { subtotal: subtotal });
    yield put(updateSubtotalSuccess('Subtotal updated!'));
    yield put(getCart());

    toast.success('Subtotal updated!');
  } catch (error) {
    let errorMessage = error.response
      ? error.response.statusText
      : error.message;

    yield put(updateSubtotalFail(errorMessage));
    toast.error(errorMessage);
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
