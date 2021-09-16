import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import marketReducer from './markets/markets';

const rootReducer = combineReducers({
  marketReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

window.store = store;

export default store;
