import Head from "next/head";
import Link from "next/link";
import { VStack, AbsoluteCenter, Box, Heading } from "@chakra-ui/react"
import MyButton from "../components/MyButton";




const Home = () => {

  return (
    <>
      <Head>
        <title>Darren Medrano</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" />
      </Head>
      <Box h={{
        base: "800",
        sm: "950"
      }} bgGradient="linear(to-r, black, black)">
        <AbsoluteCenter axis="both">
          <VStack spacing={{
            base: 4,
            md: 10
          }}>
            <Heading className="typed-heading" 
            as="h1" size={{
              base: "4xl",
              md: "4xl"
            }} 
            bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' 
            p={4}
            >Let&#x27;s Build<br/>Something</Heading>
                        <Heading className="typed-heading2" as="h1" size={{
              base: "4xl",
              md: "4xl"
            }} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' p={4}>Let&#x27;s Build Something</Heading>
            <Link href="/portfolio"><MyButton /></Link>
          </VStack>
        </AbsoluteCenter>
      </Box>
    </>
  )
}

export default Home;
