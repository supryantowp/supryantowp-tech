import React from "react";
import { Stack, Heading, Box, Text, Link, Image } from "@chakra-ui/core";

import me from "../assets/man.png";

const Hero = () => {
  return (
    <Box>
      <Stack mt="3rem" isInline align="center" spacing={8} color="white">
        <Box w={["auto", "60%"]}>
          <Heading>Hi, I'm Supryanto.</Heading>

          <Text mt="1.3rem" fontSize="18px" fontWeight="500">
            I do full-stack web development using Laravel, Node.Js, and React
            Js. I also organize{" "}
            <Link
              href="https://github.com/DevCodeRPL"
              isExternal
              color="primary.300"
            >
              DevCodeRPL
            </Link>
            , Create contribute{" "}
            <Link
              href="https://github.com/supryantowp"
              isExternal
              color="primary.300"
            >
              open source stuff
            </Link>{" "}
            , and still in school
          </Text>

          <Text mt="1rem" fontSize="18px" fontWeight="500">
            For business inquiries, drop a mail at{" "}
            <Link href="mailto:supryantowp@gmail.com" color="primary.300">
              supryantowp@gmail.com
            </Link>{" "}
            and let's talk.
          </Text>
        </Box>
        <Box display={["none", "block"]} zIndex="-100" ml="4rem">
          <Image src={me} w="13em" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
