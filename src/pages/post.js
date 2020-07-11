import React from "react";
import Layout from "../hoc/layout";

import PostItem from "../components/post-item";
import postJSON from "../json/post.json";

const Post = () => {
  return (
    <Layout>
      <PostItem data={postJSON} />
    </Layout>
  );
};

export default Post;
