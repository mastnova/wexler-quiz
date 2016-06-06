import React, { Component, PropTypes } from 'react';

class QuizBeginning extends Component {

  render() {
    return (
      <button className="button-start"
        onClick={this.props.onClickStart}
      >
        <span>{'Начать тест'}</span>
      </button>
    );
  }
}

QuizBeginning.propTypes = {
  onClickStart: PropTypes.func.isRequired
};

export default QuizBeginning;
