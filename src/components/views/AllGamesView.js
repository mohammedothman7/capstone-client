import React from "react";
import "./styles/AllGamesView.css";

function AllGamesView(props) {
  return (
    <div>
      {props.games.data ? (
        <div>
          <div className="container">
            <select className="btn btn-outline-danger mt-2">
              <option value="trending">Trending</option>
              <option value="Most Liked">Most Liked</option>
              <option value="Best Rating">Best Rated</option>
              <option value="Best on PS4">Best on PS4</option>
            </select>
            <div className="text-center">
              <div className="row row-cols-1 row-cols-md-3 pt-4">
                {props.games.data.map((game) => {
                  return (
                    <div className="col mb-4 parentContainer" key={game.id}>
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
          <div className="container-fluid mt-4 bg-light p-2 text-center">
            <h6>2020 GameCord</h6>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default AllGamesView;
