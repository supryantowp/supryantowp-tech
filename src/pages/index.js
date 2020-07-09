import React from "react";
import { Box } from "@chakra-ui/core";

import Project from "../components/project";
import Post from "../components/post";

import projectsJSON from "../json/projects.json";
import postsJSON from "../json/posts.json";
import Hero from "../components/hero";
import Layout from "../hoc/layout";

const boxStyle = {
  bg: "gray.600",
  p: "2rem",
  borderRadius: "5px",
  color: "white",
  mt: "-1rem",
  zIndex: "2",
};

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Box {...boxStyle}>
        <Project data={projectsJSON} isViewAll="true" />
        <Post data={postsJSON} isViewAll="true" />
      </Box>
    </Layout>
  );
};

export default HomePage;
