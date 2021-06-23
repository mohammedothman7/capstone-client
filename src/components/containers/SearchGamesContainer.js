import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBarView, SearchGamesView } from "../views";
import { LoggedInNavBarContainer } from ".";
import { clearGameThunk, fetchSearchedGamesThunk } from "../../thunks";
import { withRouter } from "react-router-dom";

export class SearchGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userId: null,
      search: "",
    };
  }

  async componentDidMount() {
    const user = { ...this.props.user };
    // console.log("before set state  ", user);
    this.setState({
      username: this.props.user.username,
      userId: this.props.user.id,
    });
    this.props.clearGame();
    // console.log("this is navbarcontainer  didmount", this.state);
  }

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
          <SearchGamesView searchGames={this.props.search} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  // console.log(state);
  return { search: state.searchGames, user: state.allUsers };
};

const mapDispatch = (dispatch) => {
  //console.log('In mapDispatch');
  return {
    clearGame: () => dispatch(clearGameThunk),
    fetchSearchedGames: (params) => dispatch(fetchSearchedGamesThunk(params)),
  };
};

export default connect(mapState, mapDispatch)(withRouter(SearchGames));
