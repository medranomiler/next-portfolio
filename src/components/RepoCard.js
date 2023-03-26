import { Card, CardHeader, CardBody, Heading, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

const RepoCard = ({ repo }) =>{
  return (
    <Box m={{
      base: "4",
      md: "4"}}>
    <Link href={repo.html_url}>
      <Card maxW="md" minW={{
        base:"xs",
        md:"md"}} minH="xs" boxShadow="dark-lg" bg="white">
        <CardHeader>
          <Heading textAlign="center" size="2xl">
            {repo.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>{repo.description}</Text>
        </CardBody>
      </Card>
    </Link>
    </Box>
  );
}

export default RepoCard;