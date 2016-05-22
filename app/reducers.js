import { combineReducers } from 'redux';
import { SET_QUESTIONS, CHANGE_QUESTION, SAVE_ANSWER } from './actions';

function questions(state = [], action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.data;
    default:
      return state;
  }
}

function user(state = localStorage.wexlerSession ?
    JSON.parse(localStorage.wexlerSession)
    : { currentQuestion: 1, answers: [] }, action) {
  let answers = [];
  switch (action.type) {
    case CHANGE_QUESTION:
      return Object.assign({}, state, { currentQuestion: state.currentQuestion + 1 });
    case SAVE_ANSWER:
      answers = state.answers.concat({
        questionId: action.questionId,
        answerId: action.answerId
      });
      return Object.assign({}, state, { answers });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  questions,
  user
});

export default rootReducer;
