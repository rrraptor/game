import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

import CharacterBlockContainer from 'containers/CharacterBlockContainer';
import Console from 'components/Console';
import Toolbar from 'components/Toolbar';

class Chrome extends Component {
  render() {
   const {children, characters} = this.props;
    return (
      <div className="chrome">
        <CharacterBlockContainer
          slot={0}
          className='chrome-character-0'
          />
        <CharacterBlockContainer
          slot={1}
          className='chrome-character-1'
          />
        <CharacterBlockContainer
          slot={2}
          className='chrome-character-2'
          />
        <CharacterBlockContainer
          slot={3}
          className='chrome-character-3'
          />
        <div className="chrome-mainContent">
          {children}
        </div>
        <Toolbar className="chrome-toolbar" />
        <Console />
      </div>
    );
  }
}

Chrome.PropTypes = {
  characters: PropTypes.arrayOf(PropTypes.obj),
  children: PropTypes.any
};

export default Chrome;

