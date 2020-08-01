import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchGameThunk,
  fetchCommentsThunk,
  fetchSSThunk,
  fetchLikesThunk,
  fetchSearchedGamesThunk,
  addLikeThunk,
} from "../../thunks";
import { GamePageView } from "../views";
import { NavBarView } from "../views";
import { LoggedInNavBarContainer } from ".";
import SimpleReactLightbox from "simple-react-lightbox";
import { withRouter } from "react-router-dom";

class GamePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userId: null,
      search: "",
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

  // Update search in state when user types
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  // Call API to search for games based on user input
  handleClick = (event) => {
    event.preventDefault(); // Prevent Page from refreshing
    const search = this.state.search; // Get search from state

    // Check if user inputted anything in search field
    if (search.length > 0) {
      // Call fetchSearchedGames to send input from user to thunk then to API
      this.props.fetchSearchedGames(this.state.search);
      this.props.history.push("/search"); // Change route to /search with search games data
    } else {
      // If user did not enter anything in search field, then load home page
      this.props.history.push("/");
    }
  };

  getGame = (id) => {
    this.props.fetchGame(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        {this.state.userId ? (
          <LoggedInNavBarContainer />
        ) : (
          <NavBarView
            search={this.state.search}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        )}
        <div>
          <SimpleReactLightbox>
            <GamePageView
              game={this.props.game}
              comments={this.props.comments}
              screenshot={this.props.screenshot}
              likes={this.props.likes}
            />
          </SimpleReactLightbox>
        </div>
      </div>
    );
  }
}

//map state to props
const mapState = (state) => {
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
    fetchSearchedGames: (params) => dispatch(fetchSearchedGamesThunk(params)),
    addLike: (newLike) => dispatch(addLikeThunk(newLike)),
  };
};

export default connect(mapState, mapDispatch)(withRouter(GamePageContainer));
