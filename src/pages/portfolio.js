import { VStack, SimpleGrid, AbsoluteCenter, Box, Card, CardHeader, CardBody, CardFooter, Flex, Icon, Avatar, Heading, IconButton, Button, Text, Spacer } from '@chakra-ui/react'
import ProfileCard from '@/components/profileCard/ProfileCard';
import {useState, useEffect} from 'react'
import Link from 'next/link';

const portfolio = () => {
    const [ repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchGitHubData() {
          const url ="https://api.github.com/users/medranomiler/repos"
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setRepos([
                    data[0],
                    data[3],
                    data[4],
                    data[5],
                    data[10],
                    data[15],
                    data[16],
                    data[17],
                ])
          setLoading(false)
        }
    
        fetchGitHubData();
    
      }, [])


    return (
        <>
            <Box h="100%" bgGradient='linear(to-r, cyan.700, purple.500)'>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" h={800} mb={200} flexWrap="wrap">
                    <Box mx={100}>
                        <ProfileCard/>
                    </Box>            
            </Box>
                <Heading textAlign="center" size="4xl" marginBottom="20">Portfolio</Heading>
                <Heading textAlign="center" size="2xl" marginBottom="20">Personal Projects</Heading>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" marginBottom="20">
                {repos.map((repo) => (
                    <Box m={2}><Link href={repo.html_url}>
                        <Card maxW='md' minW='md' minH='xs' boxShadow='dark-lg'>
                            <CardHeader>
                            <Heading textAlign="center" size="2xl">{repo.name}</Heading>
                            </CardHeader> 
                            <CardBody>
                                <Text>
                                    {repo.description}
                                </Text>
                            </CardBody>
                        </Card></Link>
                    </Box>))}
                    </Box>
                    <Heading textAlign="center" size="2xl" marginBottom="20">Collaborations</Heading>
                </Box>
            </Box>


        </>
    )
}

export default portfolio;