import React from "react";
import {
  Heading,
  Box,
  Text,
  Link,
  Image,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/core";

const Project = ({ data, isViewAll = false }) => {
  return (
    <Box>
      <Heading fontSize="24px" mb="0.4rem">
        My Projects
      </Heading>
      <Text fontSize="16px">this is the result of my project</Text>

      <SimpleGrid mt="2rem" mb="1rem" columns={[1, 2]} spacing={5}>
        {data.map((item, i) => {
          return (
            <Box
              key={i}
              p="1rem"
              bg="gray.500"
              textAlign="center"
              borderRadius="3px"
            >
              <Skeleton isLoaded>
                {item.isOpenSource ? (
                  <Link color="primary.300">
                    <Heading fontSize="20px">{item.title}</Heading>
                  </Link>
                ) : (
                  <Heading color="primary.300" fontSize="20px">
                    {item.title}
                  </Heading>
                )}
              </Skeleton>

              <Skeleton isLoaded>
                <Text>{item.stack.map((stack, i) => stack).join(" ")}</Text>
              </Skeleton>

              <Skeleton isLoaded>
                <Image src={item.images} mt="1rem" objectFit="cover" />
              </Skeleton>
            </Box>
          );
        })}
      </SimpleGrid>

      {isViewAll ? (
        <Box mb="6rem">
          <Link float="right" color="primary.300">
            View all project
          </Link>
        </Box>
      ) : null}
    </Box>
  );
};

export default Project;
