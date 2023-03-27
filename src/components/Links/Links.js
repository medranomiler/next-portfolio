import { Flex, Box, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaEnvelope, FaLinkedin, FaBitcoin  } from 'react-icons/fa';

const Links = () => {

return(
<>
<Flex mt={4} spacing={3} mt={{md:6}}>
  <Box className="social" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" fontSize="sm" fontWeight="medium" textAlign="center">
    <Link href="https://github.com/medranomiler">
      <Icon as={FaGithub} color="black" mx={3} _hover={{ cursor: 'pointer', transition: 'all .4s ease-in-out', transform: 'scale(1.3)' }} height={100} width={100} />
    </Link>
    <Link href="mailto:medranomiler@gmail.com">
    <Icon as={FaEnvelope} color="black" mx={3} _hover={{ cursor: 'pointer', transition: 'all .4s ease-in-out', transform: 'scale(1.3)' }} height={100} width={100} />
    </Link>
    <Link href="https://linkedin.com/in/darrenmedrano">
    <Icon as={FaLinkedin} color="black" mx={3} _hover={{ cursor: 'pointer', transition: 'all .4s ease-in-out', transform: 'scale(1.3)' }} height={100} width={100} />  
    </Link>
    {/* <Link href="">
    <Icon as={FaBitcoin} color="black" mx={3} _hover={{ cursor: 'pointer', transition: 'all .4s ease-in-out', transform: 'scale(1.3)' }} height={100} width={100} />  
    </Link> */}
  </Box>
</Flex>
</>
)
}

export default Links;