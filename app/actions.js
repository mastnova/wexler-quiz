import fetch from 'isomorphic-fetch';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

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
