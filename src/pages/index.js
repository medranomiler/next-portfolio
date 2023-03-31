import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard.js";
import RepoCards from "../components/Repos/RepoCards.js";
import Links from "../components/Links/Links.js";
import Collabs from "../components/Collabs/Collabs.js";

const Portfolio = () => {


  return (
    <>
      <Box h="100%" backgroundColor="black">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          h={800}
          mb={200}
          flexWrap="wrap"
        >
          <Box mx={100}>
            <ProfileCard />
        <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Links />
            </Box>
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              textAlign="center"
              size="4xl"
              marginBottom="10"
            >
              Portfolio
            </Heading>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                scrollBehavior: "smooth",
                width: "100vw",
              }}
            >
              <RepoCards />              
            </div>

    
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Collabs />
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
