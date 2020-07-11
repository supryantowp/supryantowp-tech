import React from "react";
import Layout from "../hoc/layout";

import AboutMe from "../components/about-me";
import { Box, Heading, Text, SimpleGrid, Link } from "@chakra-ui/core";

const boxStyle = {
  padding: "2rem",
  mt: "4rem",
  bg: "gray.600",
  color: "white",
  borderRadius: "5px",
};

const social = [
  { name: "DEV Comunity", link: "https://dev.to/supryantowp" },
  { name: "Github", link: "https://github.com/supryantowp" },
  { name: "LinkedIn", link: "https://linked.in/id/supryantowp" },
  { name: "Twitter", link: "https://twitter.com/supryantowp" },
];

const socials = social.map((item, i) => {
  return (
    <Text key={i}>
      {item.name} -{" "}
      <Link href={item.link} isExternal color="primary.300">
        {item.link}
      </Link>{" "}
    </Text>
  );
});

const About = () => {
  return (
    <Layout>
      <Box {...boxStyle}>
        <Box display={["none", "block"]}>
          <AboutMe isInline />
        </Box>

        <Box display={["block", "none"]}>
          <AboutMe isReversed />
        </Box>

        <Box mt="1rem">
          <Heading fontSize="28px">Knowledge Base</Heading>
          <Text>
            Here are the things I am proficient and/or currently use on a daily
            basis.
          </Text>

          <SimpleGrid mt="1rem" spacing="4" columns={[2, 4]}>
            <Box>
              <Text fontWeight="700" fontSize="20px">
                Languages
              </Text>
              <Text>CSS & HTML</Text>
              <Text>JavaScript</Text>
              <Text>PHP</Text>
              <Text>TypesScript</Text>
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="20px">
                FrontEnd
              </Text>
              <Text>Bootstrap</Text>
              <Text>Tailwind CSS</Text>
              <Text>ReactJS</Text>
              <Text>Chakra UI</Text>
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="20px">
                BackEnd
              </Text>
              <Text>Laravel</Text>
              <Text>CodeIgniter</Text>
              <Text>Mysql</Text>
              <Text>Mongo DB</Text>
              <Text>NodeJS</Text>
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="20px">
                Tools of the trade
              </Text>
              <Text>Github Desktopgithub</Text>
              <Text>Postman</Text>
              <Text>Visual Studio Code</Text>
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="20px">
                Infrastructure
              </Text>
              <Text>Netlify</Text>
              <Text>Heroku</Text>
              <Text>Vercel</Text>
            </Box>
          </SimpleGrid>

          <Heading mt="1rem" fontSize="28px">
            Socials
          </Heading>
          <Text>
            Get in touch with me on various platforms and social medias.
          </Text>

          <SimpleGrid mt="1rem" columns={1}>
            {socials}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
