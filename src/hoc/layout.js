import React from "react";
import { Box } from "@chakra-ui/core";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <Box paddingX={["2rem", "2rem", "2rem", "10rem"]} paddingY="1.5rem">
      <Navbar />
      {children}

      <Footer />
    </Box>
  );
};

export default Layout;
