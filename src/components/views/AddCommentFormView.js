import React from "react";

const AddCommentFormView = (props) => {
  return (
    <div>
      <form className="pt-5" onSubmit={props.handleSubmit}>
      <div className="form-group">
      <h2 className="text-danger">Comment</h2>
        <textarea
        className="form-control" 
          name="commentContent"
          value={props.commentContent}
          onChange={props.handleChange}
          rows="3"
          required
        ></textarea>
        </div>
        <input className="btn btn-outline-danger" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCommentFormView;
