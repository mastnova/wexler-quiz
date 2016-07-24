import expect from 'expect';
import reducer from '../app/reducers';
import * as actions from '../app/actions';

describe('reducer', () => {
  const defaultState = {
    questions: [],
    user: {
      currentQuestion: 1,
      answers: [],
      result: {}
    },
    quizState: 'not_started'
  };

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it('should handle SET_QUESTIONS', () => {
    expect(reducer(defaultState, {
      type: actions.SET_QUESTIONS,
      data: [{
        id: 1,
        text: '8 человек могут выполнить работу за 6 дней.',
        answers: [
          { id: 1, text: 24 },
          { id: 2, text: 48 }
        ]
      }]
    })).toEqual(Object.assign({}, defaultState, {
      questions: [{
        id: 1,
        text: '8 человек могут выполнить работу за 6 дней.',
        answers: [
          { id: 1, text: 24 },
          { id: 2, text: 48 }
        ]
      }]
    }));
  });

  it('should handle CHANGE_QUESTION', () => {
    expect(reducer(defaultState, {
      type: actions.CHANGE_QUESTION
    })).toEqual(Object.assign({}, defaultState, {
      user: {
        currentQuestion: 2,
        answers: [],
        result: {}
      }
    }));
  });

  it('should handle SAVE_ANSWER', () => {
    expect(reducer(defaultState, {
      type: actions.SAVE_ANSWER,
      questionId: 2,
      answerId: 4
    })).toEqual(Object.assign({}, defaultState, {
      user: {
        currentQuestion: 1,
        answers: [{
          questionId: 2,
          answerId: 4
        }],
        result: {}
      }
    }));
  });

  it('should handle SET_RESULT', () => {
    expect(reducer(defaultState, {
      type: actions.SET_RESULT,
      result: {
        score: 9,
        percentile: 67,
        text: 'well done'
      }
    })).toEqual(Object.assign({}, defaultState, {
      user: {
        currentQuestion: 1,
        answers: [],
        result: {
          score: 9,
          percentile: 67,
          text: 'well done'
        }
      }
    }));
  });

  it('should handle START_QUIZ', () => {
    expect(reducer(defaultState, {
      type: actions.START_QUIZ
    })).toEqual(Object.assign({}, defaultState, {
      quizState: 'in_progress'
    }));
  });

  it('should handle SHOW_RESULTS', () => {
    expect(reducer(defaultState, {
      type: actions.SHOW_RESULTS
    })).toEqual(Object.assign({}, defaultState, {
      quizState: 'ended'
    }));
  });
});
