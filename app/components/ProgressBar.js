import React, { Component, PropTypes } from 'react';

class ProgressBar extends Component {

  render() {
    return (
      <div className="progress">
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow="40"
          className="progress-bar progress-bar-success progress-bar-striped"
          role="progressbar"
          style={{ width: `${this.props.progress}%` }}
        ></div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default ProgressBar;
