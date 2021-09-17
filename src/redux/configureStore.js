import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import covidReducer from './markets/markets';

const rootReducer = combineReducers({
  covidReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
