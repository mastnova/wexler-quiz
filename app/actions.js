import fetch from 'isomorphic-fetch';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const START_QUIZ = 'START_QUIZ';
export const SHOW_RESULTS = 'SHOW_RESULTS';
export const SET_RESULT = 'SET_RESULT';

function setQuestions(data) {
  return { type: SET_QUESTIONS, data };
}

export function fetchQuestions() {
  return dispatch => {
    fetch('http://oblroddomtver.ru/api/wechsler/questions').then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(setQuestions(data));
        });
      }
    });
  };
}

export function changeQuestion() {
  return { type: CHANGE_QUESTION };
}

export function saveAnswer(questionId, answerId) {
  return { type: SAVE_ANSWER, questionId, answerId };
}

export function startQuiz() {
  return { type: START_QUIZ };
}

export function showResults() {
  return { type: SHOW_RESULTS };
}

function setResult(data) {
  return { type: SET_RESULT, result: data };
}

export function fetchResult(answers) {
  return dispatch => {
    fetch('http://oblroddomtver.ru/api/wechsler/result', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        answers
      })
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(setResult(data));
        });
      } else {
        console.log('connection error!');
      }
    });
  };
}
