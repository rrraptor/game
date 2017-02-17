import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import classnames from 'classnames';

class ContentFrame extends Component {
  render() {
    const {slot, content, className} = this.props;
    const contentFrameClasses = ('contentFrame', className);
    return (
      <div className={contentFrameClasses}>
        <div className='contentFrame-wrapper'>
          {content}
        </div>
      </div>
    );
  }
}

ContentFrame.PropTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  slot: PropTypes.number.isRequired
};

export default ContentFrame;

