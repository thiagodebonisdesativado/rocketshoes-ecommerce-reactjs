import { combineReducers } from 'redux';

import CartReducer from './Cart/reducer';

const reducers = combineReducers({
  CartReducer,
});

export default reducers;
