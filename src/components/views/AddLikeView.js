import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const AddLikeView = (props) => {
  return (
    <button className="btn  btn-outline-danger ml-auto" onClick={props.handleAddLike}>
       <i className="far fa-thumbs-up fa-2x"></i>
    </button>
  );
};

export default AddLikeView;
