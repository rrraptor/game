import React, { Component, PropTypes } from 'react';
import 'styles/App.css';

import WelcomeMenu from 'components/WelcomeMenu';
import CharacterCreation from 'components/CharacterCreation';
import Chrome from 'components/Chrome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        status: 'initial',
        characters: {
          1: {},
          2: {},
          3: {},
          4: {}
        }
      };
    this.onNewGameClicked = this.onNewGameClicked.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
  };
  onNewGameClicked() {
    this.setState({status: 'character_creation'});
  }
  updateCharacter(character) {
    this.setState(
      {
        characters: {
          1: character
        }
      }
    );
  }
  render() {
    const {status, characters} = this.state;
    let v;
    switch(status){
      case 'initial':
        v = <WelcomeMenu
              onNewGameClicked={this.onNewGameClicked} />
        break;
      case 'character_creation':
        v = <CharacterCreation 
              updateCharacter={this.updateCharacter}/>
        break;
      default:
        v = <div>error</div>
    }; 
    return (
      <Chrome
      characters={characters}>
        {v}
      </Chrome>
    );
  }
}

App.PropTypes = {
  characters: PropTypes.obj,
  log: PropTypes.string
};

export default App;

