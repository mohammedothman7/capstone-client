import React, { Component } from 'react';
import { AllGamesView } from '../views';
import { fetchAllGamesThunk } from '../../thunks';
import { connect } from 'react-redux';

export class AllGamesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllGames();
    const games = this.props.allGames;
    this.setState({ games });
  }
  render() {
    return (
      <div>
        {console.log(this.props.allGames)}
        {console.log('Games State', this.state.games)}
        <AllGamesView games={this.props.allGames}></AllGamesView>
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  console.log('In mapState');
  return {
    allGames: state.allGames,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  console.log('In mapDispatch');
  return {
    fetchAllGames: () => dispatch(fetchAllGamesThunk()),
  };
};

export default connect(mapState, mapDispatch)(AllGamesContainer);
