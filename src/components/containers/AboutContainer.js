import React, { Component } from "react";
import { NavBarView } from "../views";
import { AboutView } from "../views";
import { connect } from "react-redux";
import { LoggedInNavBarContainer } from ".";

class AboutContainer extends Component {
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
          <AboutView />
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

export default connect(mapState, null)(AboutContainer);
