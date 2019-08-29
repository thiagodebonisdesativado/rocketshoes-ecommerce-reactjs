import { TYPES } from './reducer';

// GET
export function getCart() {
  return {
    type: TYPES.GET,
  };
}

export function getCartSuccess(message, cartList) {
  return {
    type: TYPES.GET_SUCCESS,
    message,
    cartList,
  };
}

export function getCartFail(message) {
  return {
    type: TYPES.GET_FAIL,
    message,
  };
}

// UPDATE
export function updateAmount(id, amount) {
  return {
    type: TYPES.UPDATE_AMOUNT,
    id: id,
    amount,
  };
}

export function updateAmountSuccess(message) {
  return {
    type: TYPES.UPDATE_AMOUNT_SUCCESS,
    message,
  };
}

export function updateAmountFail(message) {
  return {
    type: TYPES.UPDATE_AMOUNT_FAIL,
    message,
  };
}

// ADD
export function addToCart(id) {
  return {
    type: TYPES.ADD,
    id: Number(id),
  };
}

export function addToCartSuccess(message) {
  return {
    type: TYPES.ADD_SUCCESS,
    message,
  };
}

export function addToCartFail(message) {
  return {
    type: TYPES.ADD_FAIL,
    message,
  };
}
