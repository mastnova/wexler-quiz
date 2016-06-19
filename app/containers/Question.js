import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeQuestion, saveAnswer, showResults } from '../actions';
import QuestionHeader from '../components/QuestionHeader';
import QuestionText from '../components/QuestionText';
import QuestionAnswers from '../components/QuestionAnswers';
import ProgressBar from '../components/ProgressBar';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeRadioId: null
    };
  }

  onChangeRadio(id) {
    this.setState({
      activeRadioId: id
    });
  }

  onClickAccept() {
    const questionId = this.props.id;
    const answerId = this.state.activeRadioId;
    const numberOfQuestions = this.props.numberOfQuestions;

    this.props.dispatch(saveAnswer(questionId, answerId));
    if (numberOfQuestions === questionId) {
      this.props.dispatch(showResults());
    } else {
      this.props.dispatch(changeQuestion());
    }
    this.setState({
      activeRadioId: null
    });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <QuestionHeader id={this.props.id} />
        <div className="panel-body">
          <ProgressBar progress={this.props.progress}/>
          <QuestionText text={this.props.text} />
          <QuestionAnswers
            activeId={this.state.activeRadioId}
            answers={this.props.answers}
            onChangeRadio={this.onChangeRadio.bind(this)}
          />
          <button
            className="btn btn-lg btn-primary"
            disabled={this.state.activeRadioId === null ? 'disabled' : ''}
            onClick={this.onClickAccept.bind(this)}
          >{'принять'}</button>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  answers: PropTypes.array,
  dispatch: PropTypes.func,
  id: PropTypes.number,
  numberOfQuestions: PropTypes.number,
  progress: PropTypes.number.isRequired,
  text: PropTypes.string
};

const mapStateToProps = (state) => {
  let progress = 0;
  const questionList = state.questions;
  const currentQuestionId = state.user.currentQuestion;
  const filteredList = questionList.filter((element) => {
    if (element.id === currentQuestionId) {
      return 1;
    }
    return 0;
  });
  const question = filteredList[0] || {};
  if (question.id > 0 && questionList.length > 0) {
    progress = ((question.id - 1) / questionList.length) * 100;
  }
  return {
    numberOfQuestions: questionList.length,
    id: question.id || 0,
    text: question.text || '',
    answers: question.answers || [],
    progress: progress
  };
};

export default connect(mapStateToProps)(Question);
