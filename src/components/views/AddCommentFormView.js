import React from "react";

const AddCommentFormView = (props) => {
  return (
    <div className="comment-form">
      <form onSubmit={props.handleSubmit}>
        <textarea
          name="commentContent"
          value={props.commentContent}
          onChange={props.handleChange}
          rows="4"
          cols="50"
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCommentFormView;
