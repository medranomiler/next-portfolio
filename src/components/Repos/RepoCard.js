import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Box, Flex, Icon, AbsoluteCenter, Center } from "@chakra-ui/react";
import { FaReact, FaBootstrap, FaNode, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiVercel, SiTailwindcss, SiOpenai, SiGraphql, SiApollographql, SiChakraui, SiJavascript, SiNextdotjs, SiGithub } from "react-icons/si";
import { useState } from "react";
import Link from "next/link"


const RepoCard = ({ repo }) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box m={{
      base: "4",
      md: "4"}}>
      <div style={{
        perspective: "1000px", 
      }}>
        <Card  bg="white" animation="glow 2s ease-in-out infinite" maxW="md" minW={{
          base: "xs",
          md: "md"}}  minH="sm"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.5s",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            cursor: "pointer"
          }}
          borderRadius={30}
          onClick={handleClick}
        >
          <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden"
          }}>
            <CardHeader>
              <Heading color="black" textAlign="center" size="2xl" py={2}>
                {repo.name}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>{repo.description}</Text>
            </CardBody>
            <CardFooter
              justify='center'
              flexWrap='wrap'
            >
              {repo.topics.map((topic) => {
             if (topic === "chakra-ui") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiChakraui} width={10} height={10} />
                </Box>
              );
            }
            if (topic === "nextjs") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiNextdotjs} width={10} height={10} />
                </Box>
              );
            }
            if (topic === "react") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={FaReact} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "vercel") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiVercel} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "openai") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiOpenai} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "js") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiJavascript} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "bootstrap") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={FaBootstrap} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "mysql") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiMysql} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "expressjs") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiExpress} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "nodejs") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={FaNode} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "mongodb") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiMongodb} width={10} height={10}  />
                </Box>
              );
            }
            if (topic === "tailwindcss") {
              return (
                <Box key={topic} mx={3}>
                  <Icon as={SiTailwindcss} width={10} height={10}  />
                </Box>
              );
            }
          })}
            </CardFooter>
          </div>
          <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}>
                        <CardHeader>
              <Heading color="black" textAlign="center" size="2xl" py={2}>
                View The Repository on GitHub
              </Heading>
            </CardHeader>
            <CardBody>
              <Box>   
              <Center><Link href={repo.html_url}><Icon as={FaGithub} height={100} width={100} /></Link></Center>  
              </Box>
            </CardBody>
          </div>
        </Card>
      </div>
    </Box>
  )
};


export default RepoCard;
