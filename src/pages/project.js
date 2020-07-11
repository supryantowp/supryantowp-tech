import React from "react";
import Layout from "../hoc/layout";
import { Box, Heading, Text } from "@chakra-ui/core";

import ProjectItem from "../components/project";
import projecstJSON from "../json/projects.json";

const project = () => {
  return (
    <Layout>
      <Box
        mt="4rem"
        padding="2rem"
        color="white"
        bg="gray.600"
        borderRadius="5px"
      >
        <Heading>Projects</Heading>
        <Text>
          Here are some of my past works from personal projects and open source
          ones.
        </Text>

        <ProjectItem data={projecstJSON} />
      </Box>
    </Layout>
  );
};

export default project;
