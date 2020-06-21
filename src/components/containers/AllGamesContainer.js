import React, { Component } from "react";
import { AllGamesView } from "../views";
import {
  fetchAllGamesThunk,
  fetchGenreGamesThunk,
  clearGameThunk,
} from "../../thunks";
import { connect } from "react-redux";

export class AllGamesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      games: [],
      filter: {
        page: 1,
        page_size: 21,
        ordering: "",
        dates: "",
      },
    };
  }

  async componentDidMount() {
    const { page, page_size } = this.state.filter;

    // Call thunk to fetch games from API
    await this.props.fetchAllGames({ page, page_size });
    this.props.clearGame();

    this.setState({ games: this.props.allGames });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allGames !== this.props.allGames) {
      this.setState({ games: this.props.allGames });
    }
  }

  /*
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  */

  // Sends the params to state, so it can be sent to backend for API call
  handleFilter = (filter) => async (event) => {
    // Prevent the page from reloading when called
    event.preventDefault();

    /*Create a copy of filter in state, so we can 
     modify if need be and send to fetchAllGamesThunk 
    so we can use in API call */
    let param = this.state.filter;

    // If a genre is passed as an argument then add to params to be passed to API
    if (filter.genres) {
      param.genres = filter.genres;
      param.page = 1;
    } else {
      delete param.genres;
    }

    // If a ordering is passed as an argument then add to params to be passed to API
    if (filter.ordering) {
      param.ordering = filter.ordering;
      param.page = 1;
    } else {
      delete param.ordering;
    }

    // If a dates is passed as an argument then add to params to be passed to API
    if (filter.dates) {
      param.dates = filter.dates;
      param.page = 1;
    } else {
      delete param.dates;
    }

    if (filter.parent_platforms) {
      param.parent_platforms = filter.parent_platforms;
      param.page = 1;
    } else {
      delete param.parent_platforms;
    }

    if (event.target.value === "trending") {
      param.page = 1;
    }
    // Set filter in state to params and isLoading to true
    this.setState({ filter: param, isLoading: true });

    // Call API and wait for response to
    await this.props.fetchAllGames(param);

    // Set the games array to API response, set isLoading to false since API has responded
    this.setState({
      games: this.props.allGames,
      isLoading: false,
    });
  };

  navigatePages = (page) => async (event) => {
    event.preventDefault();

    // Make a copy of filter in state
    let params = this.state.filter;
    if (page === "next") {
      // Modify page in the copy of the state
      params.page = params.page + 1;
    } else if (page === "previous") {
      if (params.page <= 1) return; // Check to see if page is at 1, if so then return and dont decrement page
      params.page = params.page - 1;
    }

    // Set isLoading to true while we wait for API response
    this.setState({ isLoading: true });

    // Call Thunk to fetch games from API
    await this.props.fetchAllGames(params);

    // Set the games array to allGames from redux store, isLoading to false since API responded, filter to the modified copy
    this.setState({
      games: this.props.allGames,
      isLoading: false,
      filter: params,
    });
  };

  render() {
    return (
      <div>
        <AllGamesView
          games={this.state.games}
          handleFilter={this.handleFilter}
          isLoading={this.state.isLoading}
          navigatePages={this.navigatePages}
        ></AllGamesView>
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  //console.log('In mapState');
  return {
    user: state.allUsers,
    allGames: state.allGames,
    genre: state.allGames,
    game: state.game,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  //console.log('In mapDispatch');
  return {
    fetchAllGames: (params) => dispatch(fetchAllGamesThunk(params)),
    fetchGenreGames: (genre) => dispatch(fetchGenreGamesThunk(genre)),
    clearGame: () => dispatch(clearGameThunk),
  };
};

export default connect(mapState, mapDispatch)(AllGamesContainer);
