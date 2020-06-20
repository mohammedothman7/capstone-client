import React from "react";

const AddCommentFormView = (props) => {
  return (
    <div>
      <form className="pt-4" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <h4 className="text-danger">Add Comment</h4>
          <textarea
            className="form-control"
            name="commentContent"
            value={props.commentContent}
            onChange={props.handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <input
          className="btn btn-outline-danger"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddCommentFormView;
