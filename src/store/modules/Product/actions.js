export function getProductRequest() {
  return {
    type: '@product/REQUEST_ALL',
  };
}

export function getProductSuccess(productList) {
  return {
    type: '@product/REQUEST_ALL_SUCCESS',
    productList,
  };
}
