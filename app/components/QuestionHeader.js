import React, { Component, PropTypes } from 'react';

class QuestionHeader extends Component {

  render() {
    return (
      <div className="question__question-header">
        {`Вопрос ${this.props.id} из 15`}
      </div>
    );
  }
}

QuestionHeader.propsTypes = {
  id: PropTypes.number
};

export default QuestionHeader;
