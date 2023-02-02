import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const {mainPosts} = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        <p>{mainPosts.comments}</p>
    </AppLayout>
  );
};
export default Home;
