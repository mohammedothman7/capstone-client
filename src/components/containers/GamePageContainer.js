import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGameThunk } from "../../thunks";
import { GamePageView } from "../views";
import { NavBarView } from "../views";

class GamePageContainer extends Component {
  componentDidMount = () => {
    this.props.fetchGame(this.props.match.params.id);
  };

  render() {
    return (
      <div>
        <NavBarView />
        <div>
          <GamePageView game={this.props.game} />)
        </div>
      </div>
    );
  }
}

//map state to props
const mapState = (state) => {
  console.log(state.game);
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
