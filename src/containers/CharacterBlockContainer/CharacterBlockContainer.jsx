import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CharacterBlock from 'components/CharacterBlock';

const mapStateToProps = (state, ownProps) => ({
   character: state.party.characters[ownProps.slot] ?  state.party.characters[ownProps.slot] : {},
   slot: ownProps.slot,
   className: ownProps.className
});
/*
CharacterBlockContainer.PropTypes = {
  character: PropTypes.object,
  slot: PropTypes.number.isRequired
};
*/
export default connect(mapStateToProps)(CharacterBlock);

