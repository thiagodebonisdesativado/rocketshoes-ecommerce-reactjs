import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable([]);

export default function CartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_REQUEST':
      console.log(action);
      console.log(state);
      return;
    case '@cart/ADD_SUCCESS':
      console.log(action);
      console.log(state);
      return;
    default:
      return state;
  }
}
