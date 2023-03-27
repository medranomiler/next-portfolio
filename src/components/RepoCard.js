import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Box, Flex } from "@chakra-ui/react";
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
                  <SiChakraui width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "github") {
              return (
                <Box key={topic} mx={3}>
                  <SiGithub width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "nextjs") {
              return (
                <Box key={topic} mx={3}>
                  <SiNextdotjs width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "react") {
              return (
                <Box key={topic} mx={3}>
                  <FaReact width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "vercel") {
              return (
                <Box key={topic} mx={3}>
                  <SiVercel width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "openai") {
              return (
                <Box key={topic} mx={3}>
                  <SiOpenai width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "js") {
              return (
                <Box key={topic} mx={3}>
                  <SiJavascript width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "bootstrap") {
              return (
                <Box key={topic} mx={3}>
                  <FaBootstrap width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "mysql") {
              return (
                <Box key={topic} mx={3}>
                  <SiMysql width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "expressjs") {
              return (
                <Box key={topic} mx={3}>
                  <SiExpress width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "nodejs") {
              return (
                <Box key={topic} mx={3}>
                  <FaNode width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "mongodb") {
              return (
                <Box key={topic} mx={3}>
                  <SiMongodb width="24px" height="24px" />
                </Box>
              );
            }
            if (topic === "tailwindcss") {
              return (
                <Box key={topic} mx={3}>
                  <SiTailwindcss width="24px" height="24px" />
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