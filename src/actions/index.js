const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacter(slot = 0, character) {
  return {
    type: ADD_CHARACTER,
    character,
    slot
  };
}

