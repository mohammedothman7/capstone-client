import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGameThunk, fetchCommentsThunk } from "../../thunks";
import { GamePageView } from "../views";
import { NavBarView } from "../views";

class GamePageContainer extends Component {
  componentDidMount = () => {
    console.log("this is gamepagecontainer didmount");
    this.props.fetchGame(this.props.match.params.id);
    this.props.fetchComment(this.props.match.params.id);
  };

  render() {
    console.log("this is gamepagecontainer", this.props.user.id);
    return (
      <div>
        <NavBarView />
        <div>
          <GamePageView game={this.props.game} comments={this.props.comments} />
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
    comments: state.comments,
    user: state.allUsers,
  };
};

//map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGameThunk(id)),
    fetchComment: (id) => dispatch(fetchCommentsThunk(id)),
  };
};
export default connect(mapState, mapDispatch)(GamePageContainer);
