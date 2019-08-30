import { TYPES } from './reducer';

export function getProduct() {
  return {
    type: TYPES.GET,
  };
}

export function getProductSuccess(productList) {
  return {
    type: TYPES.GET_SUCCESS,
    productList,
  };
}
