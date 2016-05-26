import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { startQuiz } from '../actions';
import Question from './Question';
import QuizBeginning from '../components/QuizBeginning';
import QuizResults from '../components/QuizResults';

class Quiz extends Component {

  onClickStart() {
    this.props.dispatch(startQuiz());
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
        currentPage = <QuizResults />;
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
  dispatch: PropTypes.func.isRequired,
  quizState: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({ quizState: state.quizState });

export default connect(mapStateToProps)(Quiz);
