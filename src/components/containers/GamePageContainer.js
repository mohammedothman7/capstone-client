import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchGameThunk,
  fetchCommentsThunk,
  fetchSSThunk,
  fetchLikesThunk,
} from "../../thunks";
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
    //console.log("this is gamepagecontainer didmount");
    this.props.fetchGame(this.props.match.params.id);
    this.props.fetchComment(this.props.match.params.id);
    this.props.fetchSS(this.props.match.params.id);
    this.props.fetchLikes(this.props.match.params.id);
    this.setState({
      username: this.props.user.username,
      userId: this.props.user.id,
    });
  };

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    //console.log("this is gamepagecontainer", this.props.user.id);
    console.log("this is gamepagecontainer --- render");
    return (
      <div>
        {this.state.userId ? <LoggedInNavBarContainer /> : <NavBarView />}
        <div>
          <GamePageView
            game={this.props.game}
            comments={this.props.comments}
            screenshot={this.props.screenshot}
            likes={this.props.likes}
          />
        </div>
      </div>
    );
  }
}

//map state to props
const mapState = (state) => {
  // console.log("state ss", state.screenshot);
  console.log("This is mapState ---  games", state.game);
  // console.log("state likes", state.likes);
  return {
    game: state.game,
    comments: state.comments,
    user: state.allUsers,
    screenshot: state.screenshot,
    likes: state.likes,
  };
};

//map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchGame: (id) => dispatch(fetchGameThunk(id)),
    fetchComment: (id) => dispatch(fetchCommentsThunk(id)),
    fetchSS: (id) => dispatch(fetchSSThunk(id)),
    fetchLikes: (id) => dispatch(fetchLikesThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(GamePageContainer);
