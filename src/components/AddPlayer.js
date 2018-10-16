import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './AddPlayer.css';

class AddPlayer extends Component {
  state = {
    name: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addPlayer = () => {
    const { name } = this.state;
    const { onAddPlayerClick } = this.props;

    const newPlayer = {
      name,
      rank1: '',
      rank2: '',
      selectedRank: 999999,
    };

    onAddPlayerClick(newPlayer);

    // clear
    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="player">
        <Input
          name="name"
          fieldType="text"
          onChange={this.onChange}
          value={name}
          placeholder="Name..."
        />
        <div
          className="submit"
          onClick={this.addPlayer}
          onKeyPress={this.addPlayer}
          role="button"
          tabIndex={0}
        >
          <i className="fas fa-plus" />
        </div>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  onAddPlayerClick: PropTypes.func.isRequired,
};

export default AddPlayer;
