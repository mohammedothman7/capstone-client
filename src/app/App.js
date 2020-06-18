import React, { Component } from "react";
import RoutesContainer from "../components/routes/RoutesContainer";
import { NavBarContainer } from "../components/containers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBarContainer />
        <header>
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;