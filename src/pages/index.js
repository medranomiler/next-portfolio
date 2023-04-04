import { Box, Heading } from "@chakra-ui/react";
import ProfileCard from "../components/ProfileCard/ProfileCard.js";
import RepoCards from "../components/Repos/RepoCards.js";
import Links from "../components/Links/Links.js";
import Collabs from "../components/Collabs/Collabs.js";
import dynamic from "next/dynamic"

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
            <div className="reposTooltip">Tip! If viewing on desktop hold shift and scroll to view more</div>
            <div className="reposContainer">
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

export default dynamic (() => Promise.resolve(Portfolio), {ssr: false})
