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
      <img src={props.game.background_image} alt={props.game.name}></img>
      <h1>Game Name: {props.game.name}</h1>
      <h5>Released date: {props.game.released}</h5>
      <h5>
        Website: <a href={props.game.website}>{props.game.website}</a>
      </h5>
      <p>{props.game.description_raw}</p>
      <h3>
        rating: {props.game.rating}/{props.game.rating_top}
      </h3>
      <div>
        {props.comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p>Content: {comment.commentContent}</p>{" "}
            <h5>Username: {comment.user.username}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePageView;
