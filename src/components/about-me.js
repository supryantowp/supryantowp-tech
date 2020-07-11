import React from "react";
import { Box, Stack, Heading, Text, Link, Avatar } from "@chakra-ui/core";

import me from "../assets/me.png";
const AboutMe = (props) => {
  return (
    <Stack {...props} spacing="2">
      <Box>
        <Heading>Hi, I'm Supryanto.</Heading>
        <Text fontSize="18px" mt="1rem">
          My full name Supryanto Widadi Putra, and Supryanto in short. but you
          can call me Anto. and currently living in{" "}
          <Link color="primary.300" href="https://ciamiskab.go.id/" isExternal>
            Ciamis, Indonesia
          </Link>
          . currently studying at{" "}
          <Link color="primary.300" href="http://smkn1ciamis.id/">
            Smkn 1 Ciamis
          </Link>{" "}
          majoring in software engineering at the 12th grade{" "}
        </Text>
        <Text fontSize="18px" mt="1rem">
          I started majoring in software engineering learning{" "}
          <Link
            href="https://id.wikipedia.org/wiki/C%2B%2B"
            isExternal
            color="primary.300"
          >
            {" "}
            C++
          </Link>{" "}
          programming, understanding basic was important. then I started backend
          using{" "}
          <Link
            href="https://id.wikipedia.org/wiki/PHP"
            isExternal
            color="primary.300"
          >
            PHP
          </Link>{" "}
          then I used the{" "}
          <Link
            href="https://id.wikipedia.org/wiki/CodeIgniter"
            color="primary.300"
            isExternal
          >
            CI
          </Link>{" "}
          and{" "}
          <Link
            href="https://id.wikipedia.org/wiki/Laravel"
            isExternal
            color="primary.300"
          >
            Laravel
          </Link>{" "}
          frameworks. I currently spend studying the{" "}
          <Link
            href="https://medium.com/@digimktg/what-is-mern-stack-9c867dbad302"
            color="primary.300"
            isExternal
          >
            MERN
          </Link>{" "}
          stack
        </Text>

        <Text mt="1rem" fontSize="18px">
          You can contact me via email at{" "}
          <Link color="primary.300" href="mailto:supryantowp@gmail.com">
            supryantowp@gmail.com
          </Link>
        </Text>
      </Box>
      <Box>
        <Avatar
          width="300px"
          height="300px"
          src={me}
          name="Supryanto Widadi Putra"
        />
      </Box>
    </Stack>
  );
};

export default AboutMe;
