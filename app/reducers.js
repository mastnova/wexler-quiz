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

function user(state = { currentQuestion: 1, answers: [] }, action) {
  switch (action.type) {
    case 'changequestion':
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  questions,
  user
});

export default rootReducer;
