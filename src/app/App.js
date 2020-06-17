import React, { Component } from "react";
import RoutesContainer from "../components/routes/RoutesContainer";
import "./App.css";
import { NavBarContainer } from "../components/containers";

class App extends Component {
  render() {
    return (
      <div>
      <NavBarContainer />
      <header>
        <RoutesContainer />
      </header>
      </div>
    );
  }
}

export default App;
