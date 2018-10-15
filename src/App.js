import React, { Component } from 'react';
import './App.css';
import FlipMove from 'react-flip-move';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';

class App extends Component {
  state = {
    players: [],
  };

  addPlayer = (player) => {
    const { players } = this.state;
    const newPlayer = player;
    let id;

    if (players.length > 0) {
      id = players[players.length - 1].id + 1;
    } else {
      id = 0;
    }

    newPlayer.id = id;

    players.push(player);
    this.setState({
      players,
    });
  };

  updatePlayer = (updatedPlayer) => {
    const { players } = this.state;


    const foundPlayer = players.findIndex(x => x.id === updatedPlayer.id);
    players[foundPlayer] = updatedPlayer;

    this.setState({
      players,
    });
  };

  render() {
    const { players } = this.state;
    return (
      <div className="container">
        <div className="column">
          <AddPlayer onAddPlayerClick={this.addPlayer} />
          <FlipMove duration="800">
            {players
              .sort((obj1, obj2) => (
                (obj2.selectedRank !== undefined)
                    - (obj1.selectedRank !== undefined)
                  || obj1.selectedRank - obj2.selectedRank
              ))
              .map(player => (
                <Player
                  key={player.id}
                  player={player}
                  onPlayerChange={this.updatePlayer}
                />
              ))}
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default App;
