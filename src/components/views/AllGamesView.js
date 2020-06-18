import React from "react";
import "./styles/AllGamesView.css";

function AllGamesView(props) {
  return (
    <div>
      {props.games.data ? (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 ">
                <br></br>
                <br></br>
                <br></br>
                <div className="ml-4">
                  <h3 className="text-danger">Top</h3>
                  <button className="btn btn-outline-danger">
                    Popular in 2020
                  </button>
                  <button className="btn btn-outline-danger">
                    All Time Greatest
                  </button>
                  <button className="btn btn-outline-danger">Top Rated</button>
                </div>

                <div className="ml-4 pt-4">
                  <h3 className="text-danger">New Releases</h3>
                  <button className="btn btn-outline-danger">This week</button>
                  <button className="btn btn-outline-danger">Next week</button>
                  <button className="btn btn-outline-danger">
                    Last 30 days
                  </button>
                </div>

                <div className="ml-4 pt-4">
                  <h3 className="text-danger">Genres</h3>
                  <button className="btn btn-outline-danger">Action</button>
                  <button className="btn btn-outline-danger">RPG</button>
                  <button className="btn btn-outline-danger">Racing</button>
                  <button className="btn btn-outline-danger">Shooter</button>
                  <button className="btn btn-outline-danger">Adventure</button>
                  <button className="btn btn-outline-danger">Puzzle</button>
                  <button className="btn btn-outline-danger">Strategy</button>
                </div>
              </div>
              <div className="col-10">
                <select className="btn btn-outline-danger mt-2">
                  <option value="trending">Trending</option>
                  <option value="Most Liked">Most Liked</option>
                  <option value="Best Rating">Release Date</option>
                  <option value="Best on PS4">Name</option>
                </select>
                <div className="text-center">
                  <div className="row row-cols-1 row-cols-md-3 pt-4">
                    {props.games.data.map((game) => {
                      return (
                        <div
                          className="col mb-4 parentContainer"
                          key={game.id}
                          onClick={props.onClickDiv}
                        >
                          <div className="card">
                            <img
                              className="card-img-top"
                              alt={game.name}
                              src={game.background_image}
                            />
                            <div className="card-body">
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
export default AllGamesView;
