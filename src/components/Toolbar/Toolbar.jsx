import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import classnames from 'classnames';

class Toolbar extends Component {
  render() {
    const {controls, className} = this.props;
    const classes = classnames('toolbar', className);
    return (
      <div className={classes}>
      </div>
    );
  }
};

Toolbar.PropTypes = {
  controls: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string
};
        
export default Toolbar;

