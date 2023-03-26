import { Box, Heading, Spinner, Flex} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import ProfileCard from "../components/ProfileCard/ProfileCard.js";
import RepoCard from "../components/RepoCard.js";
import useFetchGitHubData from "../utils/useFetchGitHubData.js";
import devstr from "./devstr.png"
import devstrName from "./My project-1-9.png"



const portfolio = () => {
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
                    <Flex><Box w={20}/><Image  src={devstrName} /></Flex></Link>
                </Box>
            </Box>
        </>
    )
}

export default portfolio;