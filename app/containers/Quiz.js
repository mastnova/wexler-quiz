import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { startQuiz, fetchResult } from '../actions';
import Question from './Question';
import QuizBeginning from '../components/QuizBeginning';
import QuizResults from '../components/QuizResults';

class Quiz extends Component {

  onClickStart() {
    this.props.dispatch(startQuiz());
  }

  getResult() {
    this.props.dispatch(fetchResult(this.props.answers));
  }

  render() {
    let currentPage;
    switch (this.props.quizState) {
      case 'not_started':
        currentPage = <QuizBeginning onClickStart={this.onClickStart.bind(this)}/>;
        break;
      case 'in_progress':
        currentPage = <Question />;
        break;
      case 'ended':
        currentPage = (
          <QuizResults
            getResult={this.getResult.bind(this)}
            result={this.props.result}
          />);
        break;
      default:
        currentPage = <QuizBeginning />;
    }
    return (
      <div className="quiz-wrapper">
        {currentPage}
      </div>
    );
  }
}

Quiz.propTypes = {
  answers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  quizState: PropTypes.string.isRequired,
  result: PropTypes.object
};

const mapStateToProps = (state) => ({
  quizState: state.quizState,
  answers: state.user.answers,
  result: state.user.result
});

export default connect(mapStateToProps)(Quiz);
