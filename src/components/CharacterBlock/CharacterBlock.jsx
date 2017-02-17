import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import classnames from 'classnames';

import ContentFrame from 'components/ContentFrame';
import StatBar from 'components/StatBar';

class CharacterBlock extends Component {
  render() {
    const {slot, character, className} = this.props;
    const classes = classnames(className, 'characterBlock');
    return (
      <div className={classes}>
        <ContentFrame
          className='characterBlock-frame'
          slot={slot}
          content={
            <img className='contentFrame-content' src={character.avatar} />
          } />
        <StatBar 
          className='characterBlock-stats'/>
      </div>
    );
  }
}

CharacterBlock.PropTypes = {
  character: PropTypes.object,
  slot: PropTypes.number.isRequired
};

export default CharacterBlock; 
