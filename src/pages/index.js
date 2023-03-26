import Head from "next/head";
import Link from "next/link";
import {  VStack, AbsoluteCenter, Box, Heading, Button } from "@chakra-ui/react"



const Home = () => {

  return (
    <>
      <Head>
        <title>Darren Medrano</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"/>
      </Head>
        <Box h={{
          base:"800",
          sm:"950"}} bgGradient="linear(to-r, cyan.700, purple.500)">
          <AbsoluteCenter axis="both">
            <VStack spacing={{
              base:4,
              md:10}}>
              <Heading as="h1" size={{
                base:"4xl",
                md:"4xl"}}>Let's Build Something</Heading>
              <Button variant="outline" size={{
                base:"sm",
                md:"lg"}}><Link href="/portfolio">Learn More</Link></Button>
</VStack>
</AbsoluteCenter>
</Box>
    </>
  )
}

export default Home;
