import { TYPES } from './reducer';

export function productRequest() {
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
