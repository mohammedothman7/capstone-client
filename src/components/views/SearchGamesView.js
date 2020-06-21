import React from "react";
import { withRouter } from "react-router-dom";
import "./styles/AllGamesView.css";

function SearchGamesView(props) {
  return (
    <div>
      {props.searchGames !== undefined ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="mt-4 mb-1">
                <select className="btn btn-outline-danger">
                  <option value="trending">Trending</option>
                  <option value="Most Liked">Most Liked</option>
                  <option value="Best Rating">Release Date</option>
                  <option value="Best on PS4">Name</option>
                </select>
                <button
                  className="btn btn-outline-danger ml-2 float-right"
                  //onClick={props.navigatePages({ page: -1 })}
                >
                  Next Page
                </button>
                <button
                  className="btn btn-outline-danger float-right"
                  //onClick={props.navigatePages({ page: -2 })}
                >
                  Previous Page
                </button>
              </div>
              <div className="text-center">
                <div className="row row-cols-1 row-cols-md-3 pt-4">
                  {props.searchGames.map((game) => {
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
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default withRouter(SearchGamesView);
