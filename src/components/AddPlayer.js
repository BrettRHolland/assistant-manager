import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

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
        <InputField
          name="name"
          fieldType="text"
          onChange={this.onChange}
          value={name}
          placeholder="Name..."
        />
        <div
          className="rank submit"
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
