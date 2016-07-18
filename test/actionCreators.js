import expect from 'expect';
import * as actions from '../app/actions';

describe('actions', () => {
  it('should create an action to change a question', () => {
    const expectedAction = {
      type: actions.CHANGE_QUESTION
    };
    expect(actions.changeQuestion()).toEqual(expectedAction);
  });

  it('should create an action to save answer', () => {
    const questionId = 4;
    const answerId = 1;
    const expectedAction = {
      type: actions.SAVE_ANSWER,
      questionId,
      answerId
    };
    expect(actions.saveAnswer(questionId, answerId)).toEqual(expectedAction);
  });

  it('should create an action to show results', () => {
    const expectedAction = {
      type: actions.SHOW_RESULTS
    };
    expect(actions.showResults()).toEqual(expectedAction);
  });

  it('should create an action to start quiz', () => {
    const expectedAction = {
      type: actions.START_QUIZ
    };
    expect(actions.startQuiz()).toEqual(expectedAction);
  });

});
