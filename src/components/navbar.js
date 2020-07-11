import React from "react";
import { Box, Heading, Flex, Text, Link, Icon } from "@chakra-ui/core";
import { GrGithub, GrTwitter } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import DrawerUI from "./drawer";

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
        <NavLink to="/" exact>
          <Heading size="md" fontWeight="700">
            Supryanto
          </Heading>
        </NavLink>
      </Flex>

      <Box display={["none", "flex"]} alignItems="center" flexGrow={1}>
        <MenuItems to="/blog">Blog</MenuItems>
        <MenuItems to="/project">Projects</MenuItems>
        <MenuItems to="/about">About</MenuItems>
      </Box>

      <Box color="white" display={["none", "flex"]}>
        <Box mr={6}>
          <Link isExternal href="https://github.com/supryantowp">
            <Icon fontSize="20px" as={GrGithub} />
          </Link>
        </Box>
        <Box mr={6}>
          <Link isExternal href="https://twitter.com/supryantowp">
            <Icon fontSize="20px" as={GrTwitter} />
          </Link>
        </Box>
      </Box>

      <Box display={["block", "none"]}>
        <DrawerUI />
      </Box>
    </Flex>
  );
};

export default Navbar;
