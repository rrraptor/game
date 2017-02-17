import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

class StatBar extends Component {
  render() {
    const {slot, className} = this.props;
    const statBarClasses = classnames(className, 'statBar');

    return (
      <div className={statBarClasses}>
        <img className='statBar-content' src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Quasi-Celtic-ornamental-knot-49crossings-inrectangle.svg"/>
      </div>
    );
  }
}

StatBar.PropTypes = {
  className: PropTypes.string,
  slot: PropTypes.number.isRequired
};

export default StatBar;

