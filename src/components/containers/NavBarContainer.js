import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchedGamesThunk } from "../../thunks";
import { NavBarView } from "../views";
import { withRouter } from "react-router-dom";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
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
      <NavBarView
        search={this.state.search}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchSearchedGames: (params) => dispatch(fetchSearchedGamesThunk(params)),
  };
};

export default connect(null, mapDispatch)(withRouter(NavBarContainer));
