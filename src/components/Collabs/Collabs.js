import { Box, Heading, Flex } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import devstr from "./devstr.png"
import spacedefence from "./spacedefence.png"

const Collabs = () => {

    return (
        <>
            <Heading className="typed-heading2" textAlign="center" size="2xl" marginBottom="20" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>Collaborations</Heading>
            <Link href="https://devstr.vercel.app/"><Image src={devstr} />
                {/* <Flex>
                    <div><Image style={{
                    mixBlendMode: "multiply",
                    filter: "contrast(1)"
                }} src={devstrName} /></div>
                </Flex> */}
                </Link>
            <Box h={200}></Box>
            <Link href="https://jate-emporium.herokuapp.com/"><h2 style={{
                fontSize: "100px",
                fontWeight: "bold",
                color: "green",
                backgroundColor: "black",
                padding: "14px 14px 14px 14px",
                borderRadius: "20px"
            }}>JATE 🌮<p style={{
                fontSize: "14px",
                color: "white",
                textAlign: "center",
                position: "relative",
                top: "-20px",

            }}>Just Another Taco Emporium</p></h2></Link>
            <Box h={190}></Box>
            <Link href="https://space-defence.herokuapp.com/"><div style={{
                borderRadius: "20px",
                margin: "5px",
                overflow: "hidden"
            }}><Image style={{
                objectFit: "cover"
            }} src={spacedefence} /></div></Link>
            <Box h={200}></Box>
        </>
    )

}

export default Collabs;