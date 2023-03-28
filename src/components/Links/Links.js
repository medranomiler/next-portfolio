import { Flex, Box, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import ShowQrButton from "../showQr/showQrButton";
import SlideIn from "../../hooks/SlideIn.js";

const Links = () => {

return(
<>
<Flex  spacing={3} m={{base: 4, md: 4}}>
  <Box className="social" flexDirection={{ base: "column", md: "row"}} display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" fontSize="sm" fontWeight="medium" textAlign="center">
    <SlideIn><Link href="https://github.com/medranomiler">
      <Icon as={FaGithub} color="gray.200" m={3} _hover={{ cursor: "pointer", transition: "all .4s ease-in-out", transform: "scale(1.3)" }} height={100} width={100} />
    </Link></SlideIn>
    <SlideIn><Link href="mailto:medranomiler@gmail.com">
    <Icon as={FaEnvelope} color="gray.200" m={3} _hover={{ cursor: "pointer", transition: "all .4s ease-in-out", transform: "scale(1.3)" }} height={100} width={100} />
    </Link></SlideIn>
    <SlideIn><Link href="https://linkedin.com/in/darrenmedrano">
    <Icon as={FaLinkedin} color="gray.200" m={3} _hover={{ cursor: "pointer", transition: "all .4s ease-in-out", transform: "scale(1.3)" }} height={100} width={100} />  
    </Link></SlideIn>
    <SlideIn><ShowQrButton/></SlideIn>  
  </Box>
</Flex>
</>
)
}

export default Links;