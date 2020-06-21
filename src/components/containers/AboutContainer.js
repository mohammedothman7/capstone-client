import React, { Component } from "react";
import { NavBarView } from "../views";
import { AboutView } from "../views";
import { LoggedInNavBarContainer } from ".";
import { fetchSearchedGamesThunk } from "../../thunks";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userId: null,
      search: "",
    };
  }

  componentDidMount() {
    const user = { ...this.props.user };
    console.log("before set state  ", user);
    this.setState({
      username: this.props.user.username,
      userId: this.props.user.id,
    });
    console.log("this is navbarcontainer  didmount", this.state);
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
          <AboutView />
        </div>
      </div>
    );
  }
}

//map state to props
const mapState = (state) => {
  return {
    user: state.allUsers,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSearchedGames: (params) => dispatch(fetchSearchedGamesThunk(params)),
  };
};

export default connect(mapState, mapDispatch)(withRouter(AboutContainer));
