import { combineReducers } from 'redux';

import ProductReducer from './Product/reducer';
import CartReducer from './Cart/reducer';

const reducers = combineReducers({
  ProductReducer,
  CartReducer,
});

export default reducers;
