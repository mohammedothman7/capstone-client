import React from "react";
import { Link } from "react-router-dom";

const GamePageView = (props) => {
  return (
    <div className="game-info">
      {props.game.name ? (
        <div>
          <Link to="/">
            <button>Home page</button>
          </Link>
          <img src={props.game.background_image} alt={props.game.name}></img>
          <h1>game: {props.game.name}</h1>
          <h5>released date: {props.game.released}</h5>
          <h5>
            website: <a href={props.game.website}>{props.game.website}</a>
          </h5>
          <p>{props.game.description_raw}</p>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default GamePageView;
