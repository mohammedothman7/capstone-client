import React from "react";
import "./styles/AllGamesView.css";
import { withRouter } from "react-router-dom";
import moment from "moment";

// Get the date and format it correctly for best of year button
let year = moment().year();
let today = moment().format("YYYY-MM-DD");
let startOfWeek = moment().startOf("week").format("YYYY-MM-DD");
let endOfWeek = moment().endOf("week").format("YYYY-MM-DD");
let lastThirtyDays = moment().subtract(30, "days").format("YYYY-MM-DD");
let endOfNextWeek = moment().add({ week: 1 }).format("YYYY-MM-DD");
let startOfNextWeek = moment().add({ week: 1, day: -6 }).format("YYYY-MM-DD");

console.log(startOfNextWeek);

// console.log(lol.format("YYYY-DD-MMMM"));

function AllGamesView(props) {
  return (
    <div>
      {props.games.length > 0 && !props.isLoading ? (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 ">
                <br />
                <br />
                <br />
                <div className="ml-4">
                  <h3 className="text-danger text-center">Top</h3>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      ordering: "-added",
                    })}
                    value="popular"
                  >
                    Popular
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      ordering: "-added",
                      dates: `${year}-01-01,${today}`,
                    })}
                    value="Best of Year"
                  >
                    Best of {year}
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      ordering: "-rating",
                    })}
                    value="Top Rated"
                  >
                    Top Rated
                  </button>
                </div>

                <div className="ml-4 pt-4 mt-5">
                  <h3 className="text-danger text-center">New Releases</h3>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      dates: `${startOfWeek},${endOfWeek}`,
                    })}
                  >
                    This week
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      dates: `${startOfNextWeek},${endOfNextWeek}`,
                    })}
                  >
                    Next week
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      dates: `${lastThirtyDays},${today}`,
                    })}
                  >
                    Last 30 days
                  </button>
                </div>

                <div className="ml-4 pt-4 mt-5">
                  <h3 className="text-danger text-center">Platforms</h3>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      parent_platforms: 2,
                    })}
                  >
                    Playstation
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      parent_platforms: 3,
                    })}
                  >
                    Xbox
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      parent_platforms: 7,
                    })}
                  >
                    Nintendo
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      parent_platforms: 5,
                    })}
                  >
                    Mac
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      parent_platforms: 1,
                    })}
                  >
                    PC
                  </button>
                </div>

                <div className="ml-4 pt-4 mt-5">
                  <h3 className="text-danger text-center">Genres</h3>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({ page: 1, genres: "action" })}
                    value="action"
                  >
                    Action
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      genres: "adventure",
                    })}
                    value="adventure"
                  >
                    Adventure
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({ page: 1, genres: "arcade" })}
                    value="arcade"
                  >
                    Arcade
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({ page: 1, genres: "casual" })}
                    value="casual"
                  >
                    Casual
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      genres: "platformer",
                    })}
                    value="platformer"
                  >
                    Platformer
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({ page: 1, genres: "puzzle" })}
                    value="puzzle"
                  >
                    Puzzle
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({ page: 1, genres: "racing" })}
                    value="racing"
                  >
                    Racing
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      genres: "role-playing-games-rpg",
                    })}
                    value="role-playing-games-rpg"
                  >
                    Role-Playing
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({ page: 1, genres: "shooter" })}
                    value="shooter"
                  >
                    Shooter
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({ page: 1, genres: "sports" })}
                    value="sports"
                  >
                    Sports
                  </button>
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={props.handleFilter({
                      page: 1,
                      genres: "strategy",
                    })}
                    value="strategy"
                  >
                    Strategy
                  </button>
                </div>
              </div>
              <div className="col-10">
                <div className="mt-4 mb-1">
                  <select className="btn btn-outline-danger">
                    <option value="trending">Trending</option>
                    <option value="Most Liked">Most Liked</option>
                    <option value="Best Rating">Release Date</option>
                    <option value="Best on PS4">Name</option>
                  </select>
                  <button
                    className="btn btn-outline-danger ml-2 float-right"
                    onClick={props.navigatePages({ page: -1 })}
                  >
                    Next Page
                  </button>
                  <button
                    className="btn btn-outline-danger float-right"
                    onClick={props.navigatePages({ page: -2 })}
                  >
                    Previous Page
                  </button>
                </div>
                <div className="text-center">
                  <div className="row row-cols-1 row-cols-md-3 pt-4">
                    {props.games.map((game) => {
                      return (
                        <div
                          className="col mb-4 parentContainer"
                          key={game.id}
                          onClick={() =>
                            props.history.push(`/gamePage/${game.id}`)
                          }
                        >
                          <div className="card">
                            <img
                              className="card-img-top game-image"
                              alt={game.name}
                              src={game.background_image}
                            />
                            <div className="card-body game-title">
                              <h5 className="card-title">{game.name}</h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className="btn btn-outline-danger"
                    onClick={props.navigatePages(-2)}
                  >
                    Previous Page
                  </button>
                  <button
                    className="btn btn-outline-danger ml-2"
                    onClick={props.navigatePages(-1)}
                  >
                    Next Page
                  </button>
                </div>
              </div>
            </div>
            <div className="container-fluid mt-4 bg-light p-2 text-center">
              <h6>2020 GameCord</h6>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default withRouter(AllGamesView);
