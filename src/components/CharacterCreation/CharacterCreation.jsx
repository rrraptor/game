import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getInt, lore, rollDice } from 'utils/all';
import { addCharacter } from 'actions';

class CharacterCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      rollsLeft: 3
    };
    this.rollStats = this.rollStats.bind(this);
  }
  rollStats() {
    const { classTypes, races } = lore;
    const { rollsLeft } = this.state;
    const sex = getInt(-1, 2) ? 'male' : 'female';
    const race = races[getInt(0, races.length)];
    const avatar = race.img[sex];
    const age = getInt(race.minAge, race.maxAge);
    const classType = classTypes[getInt(0, classTypes.length)];
    const name = 'Chris'; //getName(sex, race.name);
    const attr = {
        str: rollDice(3, 6),
        dex: rollDice(3, 6),
        chr: rollDice(3, 6),
        con: rollDice(3, 6),
        int: rollDice(3, 6),
        wis: rollDice(3, 6)
    };
    const hp = rollDice(1, classType.hitDie) + attr.con;
    
    this.setState(
      {
        rollsLeft: rollsLeft - 1,
        character: {
          name,
          sex,
          race,
          avatar,
          age,
          classType,
          attr,
          hp
        }
      }
    );
  }
  
  renderPrompt() {
    const { rollsLeft, character } = this.state;
    const { onAddCharacterClicked } = this.props;
    return (
      <div>
        { rollsLeft > 0 ?
          <button 
          onClick={this.rollStats}>
            Roll Stats ({rollsLeft})
          </button> : null
        }
        <button 
        onClick={ () => onAddCharacterClicked(0, character) }>
          Use Stats
        </button>
      </div>
    );
  }
  
  renderStats() {
    const {slot, avatar} = this.props;
    const {character} = this.state;
    const table = [
      {Name: character.name},
      {Class: character.classType.name},
      {Race: character.race.name},
      {Age: character.age},
      {Sex: character.sex},
      {hp: character.hp}
    ];
    return (
      <div className={`characterCreation`}>
        <img src={avatar} />
        
        <table>
          {
            table.map((row) => (
              <tr>
                 <th>{Object.keys(row)[0]}</th>
                <td>{row[Object.keys(row)[0]]}</td>
              </tr>
            ))
          }
        </table>
      </div>
    );
  }
  
  render() {
    const {character} = this.state;
 
    return (
      <div>
        {this.renderPrompt()}
        {character.classType ? this.renderStats() : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    party: state.party
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onAddCharacterClicked: addCharacter
  }, dispatch);
};

CharacterCreation.PropTypes = {
  onAddCharacterClicked: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreation);

