import React from "react";
import { Heading, Box, Text, Link, SimpleGrid, Divider } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

const Post = ({ data, isViewAll = false }) => {
  return (
    <Box>
      <Box mb="1rem" mt="2rem">
        {data.map((item, index) => {
          return (
            <Box key={index}>
              <SimpleGrid p="1rem" columns={[1, 3]} spacing="3">
                <Box>
                  <NavLink to={`/blog/${item.slug}`}>
                    <Heading fontSize="18px" color="primary.300">
                      {item.title}
                    </Heading>
                  </NavLink>
                </Box>
                <Box>
                  <Text>{item.shortDescription}</Text>
                </Box>
                <Box>
                  <Text textAlign="end" color="gray.400">
                    {item.date}
                  </Text>
                </Box>
              </SimpleGrid>
              <Divider />
            </Box>
          );
        })}
      </Box>

      {isViewAll ? (
        <Box mb="4rem">
          <Link float="right" color="primary.300">
            View all posts
          </Link>
        </Box>
      ) : null}
    </Box>
  );
};

export default Post;
