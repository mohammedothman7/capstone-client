import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGameThunk, fetchCommentsThunk, fetchSSThunk } from "../../thunks";
import { GamePageView } from "../views";
import { NavBarView } from "../views";
import { LoggedInNavBarContainer } from ".";

class GamePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userId: null,
    };
  }

  componentDidMount = () => {
    console.log("this is gamepagecontainer didmount");
    this.props.fetchGame(this.props.match.params.id);
    this.props.fetchComment(this.props.match.params.id);
    this.props.fetchSS(this.props.match.params.id);
    this.setState({
      username: this.props.user.username,
      userId: this.props.user.id,
    });
  };

  render() {
    console.log("this is gamepagecontainer", this.props.user.id);
    return (
      <div>
        {this.state.userId ? <LoggedInNavBarContainer /> : <NavBarView />}
        <div>
          <GamePageView
            game={this.props.game}
            comments={this.props.comments}
            screenshot={this.props.screenshot}
            isLoggedIn={this.props.userId}
          />
        </div>
      </div>
    );
  }
}

//map state to props
const mapState = (state) => {
  console.log("state ss", state.screenshot);
  console.log("state games", state.game);
  return {
    game: state.game,
    comments: state.comments,
    user: state.allUsers,
    screenshot: state.screenshot,
  };
};

//map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGameThunk(id)),
    fetchComment: (id) => dispatch(fetchCommentsThunk(id)),
    fetchSS: (id) => dispatch(fetchSSThunk(id)),
  };
};
export default connect(mapState, mapDispatch)(GamePageContainer);
