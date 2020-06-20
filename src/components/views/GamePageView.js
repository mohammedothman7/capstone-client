import React from "react";
import "./styles/GamePageView.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import ReadMoreReact from "read-more-react";
import { AddCommentFormContainer } from "../containers";
const GamePageView = (props) => {
  console.log("This is GamePageView --- view Props", props);
  return (
    <div>

      {/* {redirect to home page} */}
      <Link to="/">
        <button>Home page</button>
      </Link>

      {props.game.name ? (
        <div>

        {/* {this div block is the clip section} */}
          <div className="container-fluid bgContainer p-0">
            {props.game.clip ? (
              <video
                className="bg"
                playsInline="playsinline"
                autoPlay="autoplay"
                muted
                loop="loop"
              >
                <source src={props.game.clip.clips.full} />
              </video>
            ) : (
              <img
                className="bg"
                src={props.game.background_image_additional}
                alt={props.game.name}
              ></img>
            )}

            <div className="overlayBG p-5">
              <h1>{props.game.name}</h1>
              <div className="pt-2">
                <a
                  className="btn btn-outline-danger pb-2 ml-2"
                  href={props.game.website}
                >
                  Official Website
                </a>
              </div>
            </div>
          </div>


          <div className="container-fluid">
            <div className="row pt-4">
              <div className="col">

              {/* {this div block is the date and platform section} */}
                <div className="d-flex">
                  <h5 className="border border-danger rounded  text-danger p-2 mr-3">
                    {props.game.released}
                  </h5>
                  {props.game.parent_platforms.map((platform) => {
                    return (
                      <div className="ml-2" key={platform.platform.id}>
                        {platform.platform.name === "PlayStation" ? (
                          <i className="fab fa-playstation fa-2x"></i>
                        ) : platform.platform.name === "Xbox" ? (
                          <i className="fab fa-xbox fa-2x"></i>
                        ) : platform.platform.name === "PC" ? (
                          <i className="fas fa-desktop fa-2x"></i>
                        ) : platform.platform.name === "iOS" ? (
                          <i className="fab fa-apple fa-2x"></i>
                        ) : (
                          <></>
                        )}
                      </div>
                    );
                  })}

                  {/* {Like button work on later} */}
                  {/* <button className="btn  btn-outline-danger ml-auto">
                    <i class="far fa-thumbs-up fa-2x"></i>
                  </button> */}

                <h1>Like count: {props.likes.count}</h1>
                </div>


            {/* {this div block is the About section} */}
                <h4 className="text-danger mt-3">About</h4>
                <div>
                  <div className="border border-danger rounded">
                    <ReadMoreReact
                      text={props.game.description_raw}
                      min={80}
                      ideal={100}
                      max={200}
                      readMoreText="Read More"
                    />
                  </div>
                </div>


          {/* {this div block is the developer and genres display section} */}
                <div className=" d-flex justify-content-between text-danger pt-5">
                  <div></div>
                  <div>
                    <h4>{props.game.developers[0].name}</h4>
                    <h6 className="text-center">
                      <u>Developer</u>
                    </h6>
                  </div>
                  <div>
                    <div className="d-flex">
                      {props.game.genres.map((genre) => {
                        return (
                          <div className="d-flex" key={genre.id}>
                            <h4 className="ml-2" key={genre.id}>
                              {genre.name},
                            </h4>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      {" "}
                      <h6 className="text-center">
                        <u>Genres</u>
                      </h6>{" "}
                    </div>
                  </div>
                  <div></div>
                </div>


                {/* {this div block is the comment section} */}
                <div className="pt-5">
                  {props.comments.map((comment) => (
                    <div className="d-flex pt-1">
                      <div
                        className="border border-danger rounded"
                        key={comment.id}
                      >
                        {console.log("keyid", comment.id)}

                        <div className="pl-5">
                          <h6 className="bg-danger text-white p-2 text-break">
                            {comment.commentContent}
                          </h6>
                        </div>

                        <div>
                          <h5>Username: {comment.user.username}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div></div>
                </div>

                <AddCommentFormContainer gameId={props.game.id} />
              </div>

            {/* {this div block is the screenshot section} */}
              <div className="col">
                {props.screenshot ? (
                  <div className="row row-cols-1 row-cols-md-2 pt-4">
                    {props.screenshot.results.map((result) => {
                      return (
                        <div className="col mb-4" key={result.id}>
                          <div className="card">
                            <img
                              className="card-img-top"
                              alt="ss"
                              src={result.image}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </div>

            </div>
          </div>

        </div>
      ) : (
        <div className="loader"></div>
      )}

      <div></div>

    </div>
  );
};

export default GamePageView;
