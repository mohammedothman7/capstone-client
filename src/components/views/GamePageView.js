import React from "react";

const GamePageView = (props) => {
  return (
    <div className="game-info">
      <h1>game: {props.game.name}</h1>
      <h5>released date: {props.game.released}</h5>
      <h5>
        website: <a href={props.game.website}>{props.game.website}</a>
      </h5>
      <p>{props.game.description_raw}</p>

    </div>
  );
};

export default GamePageView;
