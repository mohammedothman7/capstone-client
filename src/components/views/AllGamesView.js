import React from "react";
import "./styles/AllGamesView.css";
import { withRouter } from "react-router-dom";

// Get the date and format it correctly for best of year button
const date = new Date();
let year = date.getFullYear();
let month = ("0" + (date.getMonth() + 1)).slice(-2);
let day = ("0" + date.getDate()).slice(-2);
let today = `${year}-${month}-${day}`;

function AllGamesView(props) {
  console.log(props.games);
  return (
    <div>
      {props.games.length > 0 ? (
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
                      ordering: "-added",
                      dates: `${year}-01-01,${today}`,
                    })}
                    value="Best of Year"
                  >
                    Popular in {year}
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    All Time Greatest
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
                  <button className="btn btn-outline-danger btn-block">
                    This week
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Next week
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Last 30 days
                  </button>
                </div>

                <div className="ml-4 pt-4 mt-5">
                  <h3 className="text-danger text-center">Platforms</h3>
                  <button className="btn btn-outline-danger btn-block">
                    Playstation
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    XBox
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Nintendo
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Mac
                  </button>
                  <button className="btn btn-outline-danger btn-block">
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
                </div>
              </div>
            </div>
            <div className="container-fluid mt-4 bg-light p-2 text-center">
              <h6>2020 GameCord</h6>

              {/*              
      <button
        onClick={props.handleFilter({
          page: 1,
          ordering: "",
          dates: "",
        })}
        value="trending"
      >
        Trending
      </button>
      */}
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
