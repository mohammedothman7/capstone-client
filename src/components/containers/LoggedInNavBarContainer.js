import React, { Component } from "react";
import { LoggedInNavBarView } from "../views";
import { connect } from "react-redux";

class LoggedInNavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
    };
  }

  componentDidMount() {
    const user = { ...this.props.user };
    console.log("before set state  ", user);
    this.setState({
      userId: this.props.user.id,
    });
    console.log("this is navbarcontainer  didmount", this.state);
  }

  handleOnClick = () => {
    window.location.reload();
    /*
    this.setState({
      userId: null,
    });
    console.log(this.state.userId);
    */
  };

  render() {
    return <LoggedInNavBarView onClick={this.handleOnClick} />;
  }
}

//map state to props
const mapState = (state) => {
  return {
    user: state.allUsers,
  };
};

export default connect(mapState, null)(LoggedInNavBarContainer);
