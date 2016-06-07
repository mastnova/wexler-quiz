import React, { Component, PropTypes } from 'react';

class QuestionText extends Component {

  render() {
    return (
      <div className="question-text">
        {this.props.text}
      </div>
    );
  }
}

QuestionText.propTypes = {
  text: PropTypes.string
};

export default QuestionText;
