import PostList from "../components/PostList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export const loader = async () => {
  const response = await fetch("https://post-sticks-backend.onrender.com/posts");
  const postsData = await response.json();
  return postsData.posts;
};
