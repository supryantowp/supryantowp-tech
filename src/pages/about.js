import React from "react";
import Layout from "../hoc/layout";

import AboutMe from "../components/about-me";
import { Box, Heading } from "@chakra-ui/core";

const boxStyle = {
  padding: "2rem",
  mt: "4rem",
  bg: "gray.600",
  color: "white",
  borderRadius: "5px",
};

const About = () => {
  return (
    <Layout>
      <Box {...boxStyle}>
        <AboutMe />

        <Heading>Knowledge Base</Heading>
      </Box>
    </Layout>
  );
};

export default About;
