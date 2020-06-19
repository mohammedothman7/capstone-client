import React from "react";
import { Link } from "react-router-dom";
import "./styles/GamePageView.css";

const GamePageView = (props) => {
  return (
    <div className="game-info">
      {props.game.name ? (
        <div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-12">
                <img
                  src={props.game.background_image}
                  className="d-block w-100"
                  alt="Game Image"
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-4">
                <div>
                  <h3 className="text-danger">{props.game.name}</h3>
                  <h5>Released: {props.game.released}</h5>
                  <h5>
                    <a href={props.game.website}>{props.game.website}</a>
                  </h5>
                  <h6 className="mt-5">Rating: {props.game.rating} / 3</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger bar-93"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      93 / 100
                    </div>
                  </div>
                  <h6 className="mt-2">
                    Metacritic: {props.game.metacritic} / 100
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger bar-75"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75 / 100
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <p>{props.game.description_raw}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default GamePageView;
