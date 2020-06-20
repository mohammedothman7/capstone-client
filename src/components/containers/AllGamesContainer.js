import React, { Component } from "react";
import { AllGamesView } from "../views";
import { fetchAllGamesThunk, fetchGenreGamesThunk } from "../../thunks";
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

    this.setState({ games: this.props.allGames });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allGames !== this.props.allGames) {
      this.setState({ games: this.props.allGames });
    }
  }

  // Sends the params to state, so it can be sent to backend for API call
  handleFilter = (filter) => async (event) => {
    // Prevent the page from reloading when called
    event.preventDefault();

    /*Create a copy of filter in state, so we can 
     modify if need be and send to fetchAllGamesThunk 
    so we can use in API call */
    let param = this.state.filter;

    if (filter.ordering) {
      param.ordering = filter.ordering;
    } else {
      param.ordering = "";
    }
    if (filter.dates) {
      param.dates = filter.dates;
    } else {
      param.dates = "";
    }

    /* If next button is clicked then filter.page is set to -1, 
    so we know to increment the page counter by 1 */
    if (filter.page === -1) {
      // Modify page in the copy of the state

      param.page = param.page + 1;
    } else if (filter.page === -2) {
      if (param.page <= 1) return;
      // Decrement page if equal to -2
      param.page = param.page - 1;
    }

    this.setState({ isLoading: true });
    // Call Thunk to fetch games from API
    await this.props.fetchAllGames(param);
    // Set the games array to allGames from redux store
    this.setState({
      games: this.props.allGames,
      isLoading: false,
      filter: param,
    });
  };

  handleGenre = (event) => {
    this.props.fetchGenreGames(event.target.value);
  };

  render() {
    return (
      <div>
        <AllGamesView
          games={this.state.games}
          filter={this.state.filter}
          fetchAllGames={this.props.fetchAllGames}
          handleFilter={this.handleFilter}
          handleGenre={this.handleGenre}
          isLoading={this.state.isLoading}
        ></AllGamesView>
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  //console.log('In mapState');
  return {
    allGames: state.allGames,
    genre: state.allGames,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  //console.log('In mapDispatch');
  return {
    fetchAllGames: (params) => dispatch(fetchAllGamesThunk(params)),
    fetchGenreGames: (genre) => dispatch(fetchGenreGamesThunk(genre)),
  };
};

export default connect(mapState, mapDispatch)(AllGamesContainer);
