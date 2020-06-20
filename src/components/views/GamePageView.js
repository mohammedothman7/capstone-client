import React from "react";
import "./styles/GamePageView.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import ReadMoreReact from "read-more-react";

const GamePageView = (props) => {
  console.log("view Props", props);
  return (
    <div>
      {props.game.name ? (
        <div>
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
                <div className="d-flex">
                  <h5 className="border border-danger rounded  text-danger p-2 mr-3">
                    {props.game.released}
                  </h5>
                  {props.game.parent_platforms.map((platform) => {
                    return (
                      <div className="ml-3 mt-1" key={platform.platform.id}>
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
                  <button className="btn  btn-outline-danger ml-auto">
                    <i class="far fa-thumbs-up fa-2x"></i>
                  </button>
                </div>
                <h4 className="text-danger mt-3">About</h4>
                <div>
                  <div className="border border-danger rounded px-2 py-1">
                    <ReadMoreReact
                      text={props.game.description_raw}
                      min={80}
                      ideal={100}
                      max={200}
                      readMoreText="Read More"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between text-danger pt-4 mt-1">
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
                </div>

                <form className="pt-4">
                  <div className="form-group">
                    <h4 className="text-danger">Add Comment</h4>
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <input
                    className="btn btn-outline-danger"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
              <div className="col">
                {props.screenshot ? (
                  <div className="row row-cols-1 row-cols-md-2 pt-4">
                    {props.screenshot.results.map((result) => {
                      return (
                        <div className="col mb-4" key={result.id}>
                          <div className="card">
                            <img
                              className="card-img-top set-ss-height"
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
          <div className="container px-5">
            <div className="row mt-5 d-flex justify-content-center">
              <div className="pt-5">
                <h2 className="text-danger text-center border border-danger rounded py-2">
                  Comments About The Game
                </h2>
                <div className="d-flex pt-1">
                  <div className="">
                    <div>
                      <h6>Adam Smith</h6>
                    </div>
                    <div className="pl-5">
                      <h6 className="bg-danger text-white p-2 text-break">
                        This game has awesome graphics and the sound is good and
                        I love the characters!
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="d-flex pt-3">
                  <div className="">
                    <div>
                      <h6>Alan Eappen</h6>
                    </div>
                    <div className="pl-5">
                      <h6 className="bg-danger text-white p-2 text-break">
                        This game has awesome graphics and the sound is good and
                        I love the characters! I could play this forever! Save
                        me please!
                      </h6>
                    </div>
                  </div>
                </div>
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
