import React from "react";
import "./styles/AboutView.css";
import video1 from "./styles/BGvideo.mp4"

const AboutView = () => {
    return(
      <div className = "bgBlack">
        <div>
          <video id="video1" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={video1} type="video/mp4" />
            </video>
          <div className="overlay my-lg-5 d-flex justify-content-center align-items-center">
                <h1>Energize Your Game</h1>
            </div>
        </div>
           
      <div className="container my-5 text-center text-white">
        <h4>Created By</h4>
        <div className="d-flex justify-content-between text-white mt-4">
           <h5>Alan Eappen</h5>
           <h5>Jan Markus Milan</h5>
           <h5>Mohammed Othman</h5>
           <h5>Taojie Tan</h5>
       </div>
           <h5 className="text-white mt-3">TTP Summer 2k20</h5>
           <div className="d-flex justify-content-center">
              <div className="logo mt-4"></div>
           </div>     
       </div>
       <div className="container-fluid mt-4 bg-light p-2 text-center">
        <h6>2020 GameCord</h6>
       </div>
      </div>
    );
}
export default AboutView;