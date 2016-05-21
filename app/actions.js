import fetch from 'isomorphic-fetch';

export const SET_QUESTIONS = 'SET_QUESTIONS';

export function fetchQuestions() {
	return dispatch => {
		fetch('/api/questions').then( response => {
			if (response.ok) {
				response.json().then( data => {
					dispatch(setQuestions(data));
				})
			}
		});
	}
}

function setQuestions(data) {
	return {type: SET_QUESTIONS, data: data};
}
