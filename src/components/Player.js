import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

class Player extends Component {
  state = {
    id: '',
    name: '',
    rank1: '',
    rank2: '',
    selectedRank: '',
    pendingUpdate: false,
  };

  componentDidMount() {
    const {
      player: {
        id, name, rank1, rank2, selectedRank,
      },
    } = this.props;

    this.setState({
      id,
      name,
      rank1,
      rank2,
      selectedRank: Number(selectedRank),
    });
  }

  selectRank = async (e, rank) => {
    if (e.target.id === 'rank1' || e.target.id === 'rank2') {
      await this.setState({ selectedRank: rank });
      this.onUpdate();
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, pendingUpdate: true });
  };

  onUpdate = () => {
    const { onPlayerChange } = this.props;
    const {
      id, name, rank1, rank2, selectedRank,
    } = this.state;
    const updatedPlayer = {
      id,
      name,
      rank1: Number(rank1),
      rank2: Number(rank2),
      selectedRank: Number(selectedRank),
    };
    this.setState({ pendingUpdate: false });
    onPlayerChange(updatedPlayer);
  };

  render() {
    const {
      name, rank1, rank2, selectedRank, pendingUpdate,
    } = this.state;

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
          id="rank1"
          className={selectedRank === rank1 ? 'rank selected' : 'rank'}
          onClick={e => this.selectRank(e, rank1)}
          onKeyPress={e => this.selectRank(e, rank1)}
          role="button"
          tabIndex={0}
        >
          <InputField
            name="rank1"
            fieldType="number"
            onChange={this.onChange}
            value={rank1}
            placeholder="0"
          />
        </div>
        <div
          id="rank2"
          className={selectedRank === rank2 ? 'rank selected' : 'rank'}
          onClick={e => this.selectRank(e, rank2)}
          onKeyPress={e => this.selectRank(e, rank2)}
          role="button"
          tabIndex={0}
        >
          <InputField
            name="rank2"
            fieldType="number"
            onChange={this.onChange}
            value={rank2}
            placeholder="0"
          />
        </div>
        <div className="rank average">{(Number(rank1) + Number(rank2)) / 2}</div>
        <div
          className={pendingUpdate ? 'rank update pending' : 'rank update'}
          onClick={this.onUpdate}
          onKeyPress={this.onUpdate}
          role="button"
          tabIndex={0}
        >
          <i className="fas fa-sync-alt" />
        </div>
      </div>
    );
  }
}

export default Player;

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    rank1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rank2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selectedRank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onPlayerChange: PropTypes.func.isRequired,
};
