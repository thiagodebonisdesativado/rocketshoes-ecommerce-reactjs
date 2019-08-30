import Immutable from 'seamless-immutable';

export const TYPES = {
  GET: '@cart/GET',
  GET_SUCCESS: '@cart/GET_SUCCESS',
  GET_FAIL: '@cart/GET_FAIL',
  ADD: '@cart/ADD',
  ADD_SUCCESS: '@cart/ADD_SUCCESS',
  ADD_FAIL: '@cart/ADD_FAIL',
  REMOVE: '@cart/REMOVE',
  REMOVE_SUCCESS: '@cart/REMOVE_SUCCESS',
  REMOVE_FAIL: '@cart/REMOVE_FAIL',
  UPDATE_AMOUNT: '@cart/UPDATE_AMOUNT',
  UPDATE_AMOUNT_SUCCESS: '@cart/UPDATE_AMOUNT_SUCCESS',
  UPDATE_AMOUNT_FAIL: '@cart/UPDATE_AMOUNT_FAIL',
  UPDATE_SUBTOTAL: '@cart/UPDATE_SUBTOTAL',
  UPDATE_SUBTOTAL_SUCCESS: '@cart/UPDATE_SUBTOTAL_SUCCESS',
  UPDATE_SUBTOTAL_FAIL: '@cart/UPDATE_SUBTOTAL_FAIL',
};

const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
  successMessage: '',
  cartList: [],
});

export default function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.GET:
    case TYPES.ADD:
    case TYPES.REMOVE:
    case TYPES.UPDATE_AMOUNT:
    case TYPES.UPDATE_SUBTOTAL:
      return { ...state, loading: true };
    case TYPES.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        successMessage: action.message,
        cartList: [...action.cartList],
      };
    case TYPES.ADD_SUCCESS:
    case TYPES.REMOVE_SUCCESS:
    case TYPES.UPDATE_AMOUNT_SUCCESS:
    case TYPES.UPDATE_SUBTOTAL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        successMessage: action.message,
      };
    case TYPES.GET_FAIL:
    case TYPES.ADD_FAIL:
    case TYPES.REMOVE_FAIL:
    case TYPES.UPDATE_AMOUNT_FAIL:
    case TYPES.UPDATE_SUBTOTAL_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.message,
      };
    default:
      return state;
  }
}
