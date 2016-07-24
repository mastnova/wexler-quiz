import { combineReducers } from 'redux';
import {
  SET_QUESTIONS,
  CHANGE_QUESTION,
  SAVE_ANSWER,
  START_QUIZ,
  SHOW_RESULTS,
  SET_RESULT
} from './actions';

try {
  localStorage;
} catch (err) {
  var localStorage = null;
}

let defaultUserState;
let defaultQuizState;
if (localStorage && localStorage.wexlerSession) {
  defaultUserState = JSON.parse(localStorage.wexlerSession);
} else {
  defaultUserState = {
    currentQuestion: 1,
    answers: [],
    result: {}
  };
}

if (localStorage && localStorage.quizState) {
  defaultQuizState = localStorage.quizState;
} else {
  defaultQuizState = 'not_started';
}

function questions(state = [], action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.data;
    default:
      return state;
  }
}

function user(state = defaultUserState, action) {
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
    case SET_RESULT:
      return Object.assign({}, state, { result: action.result });
    default:
      return state;
  }
}

function quizState(state = defaultQuizState, action) {
  switch (action.type) {
    case START_QUIZ:
      return 'in_progress';
    case SHOW_RESULTS:
      return 'ended';
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  questions,
  user,
  quizState
});

export default rootReducer;
