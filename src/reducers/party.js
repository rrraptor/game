import { ADD_CHARACTER } from 'actions';
import Immutable from 'seamless-immutable';

const character = (state = Immutable({}), action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return Object.assign({}, state, action.character); 
    default:
      return state; 
  }
};

const initialParty = Immutable({
  characters: []
});

const party = (state = initialParty, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        characters: state.characters.concat(character(undefined, action))
      }; 
    default:
      return state;
  };
};
export default party;

