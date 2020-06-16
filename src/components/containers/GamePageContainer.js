import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGameThunk } from "../../thunks";
import { GamePageView } from "../views";

class GamePageContainer extends Component {
  componentDidMount = () => {
    this.props.fetchGame(this.props.match.params.id);
  };

  render() {
    return <GamePageView game={this.props.game} />;
  }
}

//map state to props
const mapState = (state) => {
  return {
    game: state.game,
  };
};

//map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGameThunk(id)),
  };
};
export default connect(mapState, mapDispatch)(GamePageContainer);
