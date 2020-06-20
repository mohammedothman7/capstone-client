import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGameThunk, fetchSSThunk } from "../../thunks";
import { GamePageView } from "../views";

class GamePageContainer extends Component {
  componentDidMount = () => {
    this.props.fetchGame(this.props.match.params.id);
    this.props.fetchSS(this.props.match.params.id);
  };

  render() {
    return <GamePageView game={this.props.game} screenshot={this.props.screenshot} />;
  }
}

//map state to props
const mapState = (state) => {
  console.log("state ss ",state.screenshot)
  console.log("state games", state.game)
  return {
    game: state.game,
    screenshot: state.screenshot,
  };
};

//map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGameThunk(id)),
    fetchSS: (id) => dispatch(fetchSSThunk(id)),
  };
};
export default connect(mapState, mapDispatch)(GamePageContainer);
