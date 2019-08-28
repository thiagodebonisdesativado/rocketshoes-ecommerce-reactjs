import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({});

export default function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@product/REQUEST_ALL_SUCCESS':
      return [action.productList];
    default:
      return state;
  }
}
