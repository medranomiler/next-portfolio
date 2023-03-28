import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Box, Flex, Icon } from "@chakra-ui/react";
import {FaReact, FaBootstrap, FaNode, FaLink} from "react-icons/fa"
import { SiMongodb, SiMysql, SiExpress, SiVercel, SiTailwindcss, SiOpenai, SiGraphql, SiApollographql, SiChakraui, SiJavascript, SiNextdotjs, SiGithub} from "react-icons/si"
import Link from "next/link";
import { useEffect, useState } from "react"

const RepoCard = ({ repo }) =>{
  const [borderColor, setBorderColor] = useState("#000"); // Set initial color
  const colors = ["blue", "purple", "red"]; // Define array of colors
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Choose random color from array
      setBorderColor(randomColor);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  
  const boxShadow = `2px 2px 10px ${borderColor}`;
  const borderColors = `2px solid ${borderColor}`

  return (
    <Box m={{
      base: "4",
      md: "4"}}>
    <Link href={repo.html_url}>
      <Card maxW="md" minW={{
        base:"xs",
        md:"md"}} minH="xs" border={borderColors} boxShadow={boxShadow} bg="white" >
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
        flexWrap='wrap'>
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
      </Card>
    </Link>
    </Box>
  );
}

export default RepoCard;