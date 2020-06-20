import React from "react";
import "./styles/AllGamesView.css";
import { withRouter } from "react-router-dom";

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
                  <button className="btn btn-outline-danger btn-block">
                    Popular in 2020
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    All Time Greatest
                  </button>
                  <button className="btn btn-outline-danger btn-block">
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
                  <button className="btn btn-outline-danger btn-block">
                    Action
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Adventure
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Horror
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Platformer
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Puzzle
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Racing
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Rhythm
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Role-Playing
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Shooter
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Sports
                  </button>
                  <button className="btn btn-outline-danger btn-block">
                    Strategy
                  </button>
                </div>
              </div>
              <div className="col-10">
                <select className="btn btn-outline-danger mt-4">
                  <option value="trending">Trending</option>
                  <option value="Most Liked">Most Liked</option>
                  <option value="Best Rating">Release Date</option>
                  <option value="Best on PS4">Name</option>
                </select>
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
                    onClick={props.handleFilter({ page: -2 })}
                  >
                    Previous Page
                  </button>
                  <button
                    className="btn btn-outline-danger ml-2"
                    onClick={props.handleFilter({ page: -1 })}
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
