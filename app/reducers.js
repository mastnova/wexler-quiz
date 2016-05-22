import { combineReducers } from 'redux';
import { SET_QUESTIONS, CHANGE_QUESTION } from './actions';

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
    case CHANGE_QUESTION:
      return Object.assign({}, state, { currentQuestion: state.currentQuestion + 1 });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  questions,
  user
});

export default rootReducer;
