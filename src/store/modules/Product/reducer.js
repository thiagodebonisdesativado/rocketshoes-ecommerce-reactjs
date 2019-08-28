import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({});

export default function Reducer(state = INITIAL_STATE, action) {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case '@product/REQUEST_ALL':
      console.log(state);
    //   return;
    default:
      return state;
  }
}
