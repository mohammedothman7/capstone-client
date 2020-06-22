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
