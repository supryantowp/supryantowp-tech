import React from "react";
import { Box } from "@chakra-ui/core";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <Box paddingX={["1rem", "1rem", "1rem", "10rem"]} paddingY="1.5rem">
      <Navbar />
      {children}

      <Footer />
    </Box>
  );
};

export default Layout;
