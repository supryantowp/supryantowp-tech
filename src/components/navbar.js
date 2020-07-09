import React from "react";
import { Box, Heading, Flex, Text, Link, Icon } from "@chakra-ui/core";
import { GrGithub, GrTwitter } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const MenuItems = ({ children, to }) => (
  <NavLink to={to}>
    <Link mr={6} color="white" display="block">
      <Text fontWeight="700">{children}</Text>
    </Link>
  </NavLink>
);

const Navbar = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading size="md" fontWeight="700">
          Supryanto
        </Heading>
      </Flex>

      <Box display="flex" alignItems="center" flexGrow={1}>
        <MenuItems to="/blog">Blog</MenuItems>
        <MenuItems to="/projects">Projects</MenuItems>
        <MenuItems to="/about">About</MenuItems>
      </Box>

      <Box color="white" display="flex">
        <Box mr={6}>
          <Icon fontSize="20px" as={GrGithub} />
        </Box>
        <Box mr={6}>
          <Icon fontSize="20px" as={GrTwitter} />
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
