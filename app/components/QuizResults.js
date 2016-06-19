import React, { Component, PropTypes } from 'react';
import ProgressBar from './ProgressBar';

class QuizResults extends Component {

  constructor() {
    super();
    this.state = {
      progress: 0
    };
  }

  componentWillMount() {
    this.props.getResult();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ progress: 100 });
    }, 1000
    );
    setTimeout(() => {
      jQuery('#quiz .result').addClass('done');
    }, 6000
    );

  }

  onClickReset() {
    localStorage.clear();
    document.location.reload();
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
        <h3 className="panel-title">{'Результаты'}</h3>
      </div>
        <div className="panel-body result">
          <div className="result__calculate">
            <h4>{'Обработка результатов...'}</h4>
            <ProgressBar progress={this.state.progress} animate={true}/>
          </div>
          <div className="result__finished">
            <p><b>{`Количество правильных ответов: ${this.props.result.score}`}</b></p>
            <p><b>{`Вы прошли тест лучше, чем ${this.props.result.percentile}% испытуемых`}</b></p>
            <p>{`${this.props.result.text}`}</p>
            <button
              className="btn btn-primary"
              onClick={this.onClickReset}
            >{'Начать заново'}</button>
          </div>
        </div>
      </div>
    );
  }
}

QuizResults.propTypes = {
  getResult: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired
};

export default QuizResults;
