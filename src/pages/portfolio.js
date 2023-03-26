import { Box, Heading, Spinner, Flex} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import ProfileCard from "../components/ProfileCard/ProfileCard.js";
import RepoCard from "../components/RepoCard.js";
import useFetchGitHubData from "../utils/useFetchGitHubData.js";
import devstr from "./devstr.png"
import devstrName from "./My project-1-9.png"
import spacedefence from "./spacedefence.png"



const Portfolio = () => {
const [repos, loading] = useFetchGitHubData();


    return (
        <>
            <Box h="100%" bgGradient="linear(to-r, cyan.700, purple.500)">
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" h={800} mb={200} flexWrap="wrap">
                    <Box mx={100}>
                        <ProfileCard/>
                    </Box>            
            </Box>
                <Heading textAlign="center" size="4xl" marginBottom="20">Portfolio</Heading>
                <Heading textAlign="center" size="2xl" marginBottom="20">Personal Projects</Heading>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" marginBottom="20">
                {loading? (<Spinner/>):(repos.map((repo) => <RepoCard key={repo} repo={repo} />
                  ))}
                    </Box>
                    <Heading textAlign="center" size="2xl" marginBottom="20">Collaborations</Heading>
                    <Link href="https://devstr.vercel.app/"><Image src={devstr} />
                    <Flex><Box w={20}/><Image  src={devstrName}/></Flex></Link>
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
                    }} src={spacedefence}/></div></Link>
                    <Box h={200}></Box>
                </Box>
            </Box>
        </>
    )
}

export default Portfolio;