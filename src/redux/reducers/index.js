import { combineReducers } from 'redux';
import pizzas from './pizzas';
import filters from './filters';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
});

export default rootReducer;
