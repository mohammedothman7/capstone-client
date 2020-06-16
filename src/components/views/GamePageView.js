import React from "react";
import { Link } from "react-router-dom";

const GamePageView = (props) => {
  console.log(">>>>>>" + Array.isArray(props.game.stores));
  console.log("<<<<<<<<<" + Array.isArray(props.comments));
  return (
    <div className="game-info">
      <Link to="/">
        <button>Home page</button>
      </Link>
      <h1>game: {props.game.name}</h1>
      <h5>released date: {props.game.released}</h5>
      <h5>
        website: <a href={props.game.website}>{props.game.website}</a>
      </h5>
      <p>{props.game.description_raw}</p>
      <h3>
        rating: {props.game.rating}/{props.game.rating_top}
      </h3>
      <div>
        {props.comments.map((comment) => (
          <div className="comment" key={comment.id}>
            {comment.commentContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePageView;
