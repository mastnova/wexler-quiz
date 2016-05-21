import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers.js';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default initialState =>
  createStoreWithMiddleware(rootReducer, initialState);

