import React, { Component, PropTypes } from 'react';

class ProgressBar extends Component {

  render() {
    return (
      <div className="progress">
        <div
          className={`progress-bar progress-bar-success progress-bar-striped ${this.props.animate ? 'active' : ''}`}
          style={{ width: `${this.props.progress}%` }}
        ></div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  animate: PropTypes.bool,
  progress: PropTypes.number.isRequired
};

export default ProgressBar;
