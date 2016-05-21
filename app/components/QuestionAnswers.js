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
              <input name="answer"
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
  answers: PropTypes.array
};

export default QuestionAnswers;
