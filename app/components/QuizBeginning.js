import React, { Component, PropTypes } from 'react';

class QuizBeginning extends Component {

  render() {
    return (
      <div>
        <p>{'Начнтие тест'}</p>
        <button onClick={this.props.onClickStart}>{'Начать'}</button>
      </div>
    );
  }
}

QuizBeginning.propTypes = {
  onClickStart: PropTypes.func.isRequired
};

export default QuizBeginning;
