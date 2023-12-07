import {
  useLoaderData,
  Link,
  useSubmit,
  redirect,
  json,
} from "react-router-dom";

import Modal from "../components/Modal";
import PostComments from "../components/PostComments";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const submit = useSubmit();
  const post = useLoaderData();

  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
        <div>
          {post.comments.length > 0 ? (
            <PostComments comments={post.comments} />
          ) : (
            <h4>"There are not comments, be the first!!!"</h4>
          )}
        </div>
        <p className={classes.actions}>
          <button onClick={startDeleteHandler}>Delete</button>
        </p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const loader = async ({ params }) => {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post;
};
export const action = async ({ request, params }) => {
  const response = await fetch("http://localhost:8080/posts/" + params.id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }
  return redirect("/");
};
