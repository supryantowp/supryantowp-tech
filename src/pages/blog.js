import React from "react";
import { Image, Box, Heading, Text } from "@chakra-ui/core";

import Layout from "../hoc/layout";
import Post from "../components/post";

import blog from "../assets/blog.jpg";
import postJSON from "../json/posts.json";

const Blog = () => {
  return (
    <Layout>
      <Box bg="gray.600" mt="4rem" borderRadius="5px">
        <Image
          src={blog}
          rounded="5px"
          roundedBottom="0px"
          width="full"
          height="300px"
          objectFit="cover"
        />

        <Box padding={10} color="white">
          <Heading>Latest Blog Posts</Heading>
          <Text>
            Sometimes I write about web development, other times about random
            interesting stuff.
          </Text>

          <Post data={postJSON} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Blog;
