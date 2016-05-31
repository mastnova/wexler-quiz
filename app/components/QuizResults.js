import React, { Component, PropTypes } from 'react';

class QuizResults extends Component {

  componentWillMount() {
    this.props.getResult();
  }

  render() {
    return (
      <div>
        {`rightAnswers= ${this.props.result.score}
          perc = ${this.props.result.percentile}
          QuizResults = ${this.props.result.text}`}
      </div>
    );
  }
}

QuizResults.propTypes = {
  getResult: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired
};

export default QuizResults;
