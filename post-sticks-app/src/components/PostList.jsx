import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              body={post.body}
              id={post.id}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are not posts yet!!!</h2>
          <p>Start doing someone</p>
        </div>
      )}
    </>
  );
};

export default PostList;
