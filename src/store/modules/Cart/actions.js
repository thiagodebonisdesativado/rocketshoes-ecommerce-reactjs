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

// UPDATE AMOUNT
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

// UPDATE SUBTOTAL
export function updateSubtotal(id, subtotal) {
  return {
    type: TYPES.UPDATE_SUBTOTAL,
    id: id,
    subtotal,
  };
}

export function updateSubtotalSuccess(message) {
  return {
    type: TYPES.UPDATE_SUBTOTAL_SUCCESS,
    message,
  };
}

export function updateSubtotalFail(message) {
  return {
    type: TYPES.UPDATE_SUBTOTAL_FAIL,
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

// REMOVE
export function removeToCart(id) {
  return {
    type: TYPES.REMOVE,
    id: Number(id),
  };
}

export function removeToCartSuccess(message) {
  return {
    type: TYPES.REMOVE_SUCCESS,
    message,
  };
}

export function removeToCartFail(message) {
  return {
    type: TYPES.REMOVE_FAIL,
    message,
  };
}
