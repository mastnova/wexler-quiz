import React, { Component, PropTypes } from 'react';

class QuestionAnswers extends Component {

  render() {
    return (
      <ul className="question__answers-list">
        {this.props.answers.map(answer =>
          <li className="question__answer"
            key={answer.id}
          >
            <label>
              <input
                checked = {answer.id === this.props.activeId ? 'checked' : ''}
                name="answer"
                onChange={() => this.props.onChangeRadio(answer.id)}
                type="radio"
                value={answer.id}
              />
              {answer.text}
            </label>
          </li>
        )}
      </ul>
    );
  }
}

QuestionAnswers.propTypes = {
  activeId: PropTypes.number,
  answers: PropTypes.array,
  onChangeRadio: PropTypes.func
};

export default QuestionAnswers;
