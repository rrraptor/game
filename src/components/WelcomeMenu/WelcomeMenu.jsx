import React, { Component, PropTypes } from 'react';

class WelcomeMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onNewGameClicked} = this.props;
    return (
      <div className="welcomeMenu">
        <h1>Title</h1>
        <button
          onClick={onNewGameClicked}>
          New Game
        </button>
        <button>Load Game</button>
      </div>
    );
  }
};

WelcomeMenu.PropTypes = {
  onNewGameClicked: PropTypes.func,
  log: PropTypes.string
};

export default WelcomeMenu;
