import { Box, Heading, Spinner } from "@chakra-ui/react"
import ProfileCard from "../components/ProfileCard/ProfileCard.js";
import RepoCard from "../components/RepoCard.js";
import useFetchGitHubData from "../hooks/useFetchGitHubData.js";
import Links from "../components/Links/Links.js"
import Collabs from "../components/Collabs/Collabs.js"


const Portfolio = () => {
    const [repos, loading] = useFetchGitHubData();


    return (
        <>
            <Box h="100%" bgGradient="linear(to-r, cyan.700, purple.500)">
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" h={800} mb={200} flexWrap="wrap">
                    <Box mx={100}>
                        <ProfileCard />
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" h={800} mb={200} flexWrap="wrap">
                    <Links />
                </Box>
                <Heading textAlign="center" size="4xl" marginBottom="20">Portfolio</Heading>
                <Heading textAlign="center" size="2xl" marginBottom="20">Personal Projects</Heading>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" marginBottom="20">
                        {loading ? (<Spinner />) : (repos.map((repo) => <RepoCard key={repo} repo={repo} />
                        ))}
                    </Box>
                <Collabs/>
                </Box>
            </Box>
        </>
    )
}

export default Portfolio;