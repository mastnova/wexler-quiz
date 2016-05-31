import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';

require('bootstrap');

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { fetchQuestions } from './actions';
import Quiz from './containers/Quiz';

const store = configureStore();
store.dispatch(fetchQuestions());

store.subscribe(() => {
  const state = store.getState();
  const wexlerSession = {
    answers: state.user.answers,
    currentQuestion: state.user.currentQuestion,
    result: state.user.result
  };
  localStorage.wexlerSession = JSON.stringify(wexlerSession);
  localStorage.quizState = state.quizState;
});

ReactDOM.render((
  <Provider store={store}>
    <Quiz />
  </Provider>
), document.getElementById('quiz'));
