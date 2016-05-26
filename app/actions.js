import fetch from 'isomorphic-fetch';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const START_QUIZ = 'START_QUIZ';
export const SHOW_RESULTS = 'SHOW_RESULTS';

function setQuestions(data) {
  return { type: SET_QUESTIONS, data };
}

export function fetchQuestions() {
  return dispatch => {
    fetch('/api/questions').then(response => {
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
