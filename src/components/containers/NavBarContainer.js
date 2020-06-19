import React, { Component } from "react";
import { NavBarView } from "../views";
import { AllGamesContainer } from ".";

class NavBarContainer extends Component {
  render() {
    return (
      <div>
        <NavBarView />
        <div>
          <AllGamesContainer />
        </div>
      </div>
    );
  }
}

export default NavBarContainer;
