import { combineReducers } from 'redux';
import { SET_QUESTIONS } from './actions.js';

function questions(state = [], action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.data;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  questions
});

export default rootReducer;
