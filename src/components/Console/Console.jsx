import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

class Console extends Component {
  render() {
    const {log} = this.props;
    return (
      <div className="console">
        <div className="console-textArea" >{log}</div>
        <input type="text" className="console-input" />
      </div>
    );
  }
}

Console.PropTypes = {
  log: PropTypes.string
};

export default Console;

