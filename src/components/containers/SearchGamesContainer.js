import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchGamesView } from "../views";

export class SearchGames extends Component {
  render() {
    return (
      <div>
        {console.log("Search Games:", this.props.search)}
        <SearchGamesView searchGames={this.props.search}></SearchGamesView>
      </div>
    );
  }
}

const mapState = (state) => {
  return { search: state.searchGames };
};

export default connect(mapState)(SearchGames);
