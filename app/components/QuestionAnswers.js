import React, { Component, PropTypes } from 'react';

class QuestionAnswers extends Component {

  render() {
    return (
      <ul className="list-group">
        {this.props.answers.map(answer =>
          <li
            className=
              {answer.id === this.props.activeId ?
              'list-group-item list-group-item-info' :
              'list-group-item'}
            key={answer.id}
          >
            <label>
              <input
                checked={answer.id === this.props.activeId ? 'checked' : ''}
                hidden
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
