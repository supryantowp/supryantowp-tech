import React from "react";
import { Image, Box, Heading, Text, Divider } from "@chakra-ui/core";
const PostItem = ({ data }) => {
  return (
    <Box bg="gray.600" mt="4rem" borderRadius="5px">
      <Image
        rounded="5px"
        roundedBottom="0px"
        height="300px"
        width="full"
        objectFit="cover"
        src={data.image}
      />

      <Box
        paddingX="2rem"
        paddingY="1rem"
        width="95%"
        mx="auto"
        color="white"
        textAlign="center"
      >
        <Heading>{data.title}</Heading>
        <Text mt="1rem" fontWeight="600">
          {data.shortDescription}
        </Text>
        <Text mt="1rem" color="gray.400">
          {data.date}
        </Text>

        <Divider mt="1rem" />
      </Box>

      <Box paddingX="2rem" paddingBottom="2rem" width="95%" color="white">
        <Text>{data.description}</Text>
      </Box>
    </Box>
  );
};

export default PostItem;
