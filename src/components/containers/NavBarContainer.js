import React, { Component } from "react";
import { NavBarView } from "../views";
import { AllGamesContainer, LoggedInNavBarContainer } from ".";
import { connect } from "react-redux";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userId: null,
    };
  }

  componentDidMount() {
    const user = { ...this.props.user };
    console.log("before set state  ", user);
    this.setState({
      username: this.props.user.username,
      userId: this.props.user.id,
    });
    console.log("this is navbarcontainer  didmount", this.state);
  }

  render() {
    return (
      <div>
        {this.state.userId ? <LoggedInNavBarContainer /> : <NavBarView />}
        <div>
          <AllGamesContainer />
        </div>
      </div>
    );
  }
}

//map state to props
const mapState = (state) => {
  return {
    user: state.allUsers,
  };
};

export default connect(mapState, null)(NavBarContainer);
