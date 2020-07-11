import React from "react";
import { Box, Heading, Text } from "@chakra-ui/core";

import Project from "../components/project";
import Post from "../components/post";

import projectsJSON from "../json/projects.json";
import postsJSON from "../json/posts.json";
import Hero from "../components/hero";
import Layout from "../hoc/layout";

const boxStyle = {
  bg: "gray.600",
  borderRadius: "5px",
  color: "white",
  zIndex: "2",
};

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Box p={["1rem", "2rem"]} mt={["3rem", "-1rem"]} {...boxStyle}>
        <Heading fontSize="24px" mb="0.4rem">
          My Projects
        </Heading>
        <Text fontSize="16px">
          Here are some of my past works from personal projects and open source
          ones.
        </Text>
        <Project data={projectsJSON} isViewAll="true" />

        <Heading mt="1rem" fontSize="24px" mb="0.4rem">
          My Post
        </Heading>
        <Text fontSize="16px">
          Sometimes I write about web development, other times about random
          interesting stuff.
        </Text>
        <Post data={postsJSON} isViewAll="true" />
      </Box>
    </Layout>
  );
};

export default HomePage;
