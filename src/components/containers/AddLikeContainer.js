import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addLikeThunk } from "../../thunks";
import AddLikeView from "../views/AddLikeView";
import { game } from "../../reducers";

class AddLikeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 0,
      userId: 0,
    };
    this.alreadyLiked = false;
  }

  componentDidMount() {
    this.setState({
      gameId: this.props.gameId,
      userId: this.props.user.id,
    });
    console.log("this is addLikeContainer didmount", this.state);
  }

  handleAddLike = (e) => {
    e.preventDefault();

    if (typeof this.props.likes.rows.map == "function") {
      this.props.likes.rows.map((like) => {
        if (like.userId === this.props.user.id) this.alreadyLiked = true;
      });
    }
    if (!this.alreadyLiked) {
      this.props.addLike(this.state);
      this.alreadyLiked = true;
    } 
    else alert("You already liked this game before.");

  };

  render() {
    console.log("this AddLikeContainer");

    if (!this.state.userId)
      return (
        <Link to="/login" className="btn btn-outline-danger ml-auto">
          <i className="far fa-thumbs-up fa-2x"></i>
        </Link>
      );
    else return <AddLikeView handleAddLike={this.handleAddLike} />;
  }
}

//map state to props
const mapStateToProps = (state) => {
  console.log("!!!!!!!!!!!!!!", state.likes.rows);
  return {
    user: state.allUsers,
    likes: state.likes,
  };
};

//map dispatch to state
const mapDispatch = (dispatch) => {
  return {
    addLike: (newLike) => dispatch(addLikeThunk(newLike)),
  };
};

export default connect(mapStateToProps, mapDispatch)(AddLikeContainer);
