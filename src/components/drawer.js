import React from "react";
import {
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/core";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MenuItems = ({ children, to }) => (
  <NavLink to={to}>
    <Link mr={6} color="white" display="block">
      <Text fontSize="28px" fontWeight="700">
        {children}
      </Text>
    </Link>
  </NavLink>
);

const DrawerUI = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton as={MdMenu} variant="unstyled" onClick={onOpen} />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt="3rem">
            <Stack spacing="3">
              <MenuItems to="/blog">Blog</MenuItems>
              <MenuItems to="/project">Projects</MenuItems>
              <MenuItems to="/about">About</MenuItems>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerUI;
