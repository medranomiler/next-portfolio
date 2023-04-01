import Head from "next/head";
import { useState, useRef } from "react"
import { VStack, AbsoluteCenter, Center, Box, Heading, Button, Input, FormControl, useToast } from "@chakra-ui/react"

import Links from "../components/Links/Links"




const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()
  const toast = useToast()

  const onClick = (e) => {
    setIsVisible((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      toast({
        title: `Thank you ${newUser.name}!`,
        description: "Your form was submitted. I will be in touch shortly!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });


    } catch (err) {
      console.error(err);
      toast({
        title: "Error submitting form.",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <>
      <Head>
        <title>Darren Medrano</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" />
      </Head>
      <div style={{ height: "800px", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <VStack spacing={{
            base: 4,
            md: 10
          }}>
            {isVisible ? "" : (<>
              <Heading className="typed-heading2" as="h1" size={{
                base: "4xl",
                md: "4xl"
              }}
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text' p={4}>Contact Me</Heading>
              <FormControl><VStack spacing={{
                base: 4,
                md: 10
              }} mb={5}>
                <Input focusBorderColor="#f002f8b3" color="white" ref={nameRef} placeholder="Name" />
                <Input focusBorderColor="#f002f8b3" color="white" ref={emailRef} placeholder="Email" />
                <Input focusBorderColor="#f002f8b3" color="white" ref={phoneRef} placeholder="Phone Number" />
                <Input focusBorderColor="#f002f8b3" color="white" ref={messageRef} placeholder="Message" />
              </VStack>
                <Center><Button onClick={onSubmit} style={{
                  backgroundColor: "transparent", color: "white", animation: "glow 2s ease-in-out infinite"
                }} size={{
                  base: "sm",
                  md: "lg"
                }} mb={10} transisition="all 0.3s ease" _hover={{ transform: "translate3d(0, -10px, 22px)" }}>Submit</Button>
                </Center></FormControl>
            </>)}
            <Heading className="typed-heading2" as="h1" size={{
              base: "4xl",
              md: "4xl"
            }}
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text' p={4}>{isVisible ? (<p style={{ textAlign: "center" }}>Let&#x27;s Build Something</p>) : ""}</Heading>

            {isVisible ? (<Button onClick={onClick} style={{
              backgroundColor: "transparent", color: "white", animation: "glow 2s ease-in-out infinite"
            }} size={{
              base: "sm",
              md: "lg"
            }} mb={10} transisition="all 0.3s ease" _hover={{ transform: "translate3d(0, -10px, 22px)" }}>Learn More</Button>) : (<>
              <Links />
            </>)}
          </VStack>
        </div>

      </div>
    </>
  )
}

export default Home;
