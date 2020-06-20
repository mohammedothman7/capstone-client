import React from "react";
import { Link } from "react-router-dom";
import "./styles/GamePageView.css";
import { AddCommentFormContainer } from "../containers";

const GamePageView = (props) => {
  console.log("this is gamepageview");
  return (
    <div className="game-info">
      {props.game.name ? (
        <div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-12">
                <img
                  src={props.game.background_image}
                  className="d-block w-100 set-image-height"
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
                  <h6 className="mt-4">
                    Rating: {props.game.rating} / {props.game.rating_top}
                  </h6>
                  <h6 className="mt-2 mb-4">
                    Metacritic: {props.game.metacritic} / 100
                  </h6>
                </div>
                <div>
                  {props.isLoggedIn ? (
                    <div>
                      {props.comments.map((comment) => (
                        <div className="comment" key={comment.id}>
                          {console.log("keyid", comment.id)}
                          <p>Content: {comment.commentContent}</p>{" "}
                          <h5>Username: {comment.user.username}</h5>
                          {comment.createdAt ? (
                            <h5>Date: {comment.createdAt}</h5>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <AddCommentFormContainer gameId={props.game.id} />
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
