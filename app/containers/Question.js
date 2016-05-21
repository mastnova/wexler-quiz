import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import QuestionHeader from '../components/QuestionHeader';
import QuestionText from '../components/QuestionText';
import QuestionAnswers from '../components/QuestionAnswers';


class Question extends Component {

  render() {
    return (
      <div className="question">
        <QuestionHeader id={this.props.id} />
        <QuestionText text={this.props.text} />
        <QuestionAnswers answers={this.props.answers} />
        <button>Принять</button>
      </div>
    );
  }

}

Question.propTypes = {
  answers: PropTypes.array,
  id: PropTypes.number,
  text: PropTypes.string
};

const mapStateToProps = (state) => {
  const questionList = state.questions;
  const currentQuestionId = state.user.currentQuestion;
  const filteredList = questionList.filter((element) => {
    if (element.id === currentQuestionId) {
      return 1;
    }
    return 0;
  });
  const question = filteredList[0] || {};
  return {
    id: question.id || 0,
    text: question.text || '',
    answers: question.answers || []
  };
};

export default connect(mapStateToProps)(Question);
