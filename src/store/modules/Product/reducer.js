import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  loading: true,
  productList: [],
});

export const TYPES = {
  GET: '@product/GET',
  GET_SUCCESS: '@product/GET_SUCCESS',
};

export default function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.GET_SUCCESS:
      return { ...state, loading: false, productList: [...action.productList] };
    default:
      return state;
  }
}
