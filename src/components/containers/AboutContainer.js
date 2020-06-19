import React, { Component } from "react";
import { NavBarView } from "../views";
import { AboutView } from "../views";

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <NavBarView />
        <div>
          <AboutView />
        </div>
      </div>
    );
  }
}

export default AboutContainer;
