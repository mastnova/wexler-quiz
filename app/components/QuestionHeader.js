import React, { Component, PropTypes } from 'react';

class QuestionHeader extends Component {

  render() {
    return (
      <div className="panel-heading">
        <h3 className="panel-title">{`Вопрос ${this.props.id} из 15`}</h3>
      </div>
    );
  }
}

QuestionHeader.propTypes = {
  id: PropTypes.number
};

export default QuestionHeader;
