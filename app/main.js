import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';

require('bootstrap');

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { fetchQuestions } from './actions';
import Question from './containers/Question';

const store = configureStore();
store.dispatch(fetchQuestions());

ReactDOM.render((
  <Provider store={store}>
    <Question />
  </Provider>
), document.getElementById('quiz'));
