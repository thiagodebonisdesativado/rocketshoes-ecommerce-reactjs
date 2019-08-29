export function filterProductAmount(arrayData, productID) {
  let productFiltred = arrayData.filter(product => product.id === productID);

  return productFiltred.length !== 0 ? productFiltred[0].amount : 0;
}
