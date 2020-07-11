import React from "react";
import { Stack, Box, Text, Link, SimpleGrid, Divider } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      <Divider mt="5rem" />
      <SimpleGrid columns={2} padding={["1rem", "2rem"]}>
        <Stack color="white" align="space-between">
          <Box>
            <Text>
              Contents licensed under <Link color="primary.300">MIT</Link>.
            </Text>
            <Text>Made using ReactJs, Chakra UI.</Text>
          </Box>
          <Text alignItems="baseline">
            MIT License © 2020—present{" "}
            <Link color="primary.300">Supryanto</Link>.
          </Text>
        </Stack>
        <Stack ml="auto" color="white">
          <NavLink to="/blog">
            <Link>Blog</Link>
          </NavLink>
          <NavLink to="/project">
            <Link>Projects</Link>
          </NavLink>
          <NavLink to="/about">
            <Link>About</Link>
          </NavLink>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
