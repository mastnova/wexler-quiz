import fetch from 'isomorphic-fetch';

export const SET_QUESTIONS = 'SET_QUESTIONS';

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
