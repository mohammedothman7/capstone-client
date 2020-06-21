import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBarView, SearchGamesView } from "../views";
import { LoggedInNavBarContainer } from ".";
import {
  clearGameThunk,
} from "../../thunks";

export class SearchGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userId: null,
    };
  }

  async componentDidMount() {
    const user = { ...this.props.user };
    console.log("before set state  ", user);
    this.setState({
      username: this.props.user.username,
      userId: this.props.user.id,
    });
    this.props.clearGame();
    console.log("this is navbarcontainer  didmount", this.state);
  }

  render() {
    return (
      <div>
        {this.state.userId ? <LoggedInNavBarContainer /> : <NavBarView />}
        <div>
          {console.log("Search Games:", this.props.search)}
          <SearchGamesView searchGames={this.props.search} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log(state);
  return { search: state.searchGames, user: state.allUsers };
};

const mapDispatch = (dispatch) => {
  //console.log('In mapDispatch');
  return {
    clearGame: () => dispatch(clearGameThunk),
  };
};

export default connect(mapState, mapDispatch)(SearchGames);
