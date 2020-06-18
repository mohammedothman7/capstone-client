import React, { Component } from "react";
import { connect } from "react-redux";
import { AddCommentFormView } from "../views";
import { addCommentThunk } from "../../thunks";

class AddCommentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 0,
      userId: null,
      commentContent: "",
    };
  }

  componentDidMount() {
    // this.setState({gameId: this.props.match.params.id, userId: 2});
    this.setState({ gameId: this.props.gameId, userId: 2 });
    console.log("this is addcommentform  didmount");
  }

  handleChange = (e) => {
    this.setState({ commentContent: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
  };

  render() {
    console.log("this addcommentformcontainer");
    if (!this.state.userId) return <div>please log in to add comment</div>;
    else
      return (
        <AddCommentFormView
          gameId={this.state.gameId}
          commentContent={this.state.commentContent}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
  }
}


//map dispatch to state
const mapDispatch = (dispatch) => {
  return {
    addComment: (newComment) =>
      dispatch(addCommentThunk(newComment)),
  };
};

export default connect(null, mapDispatch)(AddCommentFormContainer);
