import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchedGamesThunk } from '../../thunks';
import { NavBarView } from '../views';

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const search = this.state.search;

    if (search.length > 0) {
      this.props.fetchSearchedGames(this.state.search);
    }
  };
  render() {
    return (
      <NavBarView
        search={this.state.search}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    );
  }
}

const mapState = (state) => {
  return { search: state.search };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSearchedGames: (params) => dispatch(fetchSearchedGamesThunk(params)),
  };
};

export default connect(mapState, mapDispatch)(NavBarContainer);
