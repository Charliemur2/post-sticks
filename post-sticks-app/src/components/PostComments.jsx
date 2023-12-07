import React from "react";

const PostComments = ({ comments }) => {
  return (
    <>
      <h4>Comments: </h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </>
  );
};

export default PostComments;
