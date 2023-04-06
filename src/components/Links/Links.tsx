import { Flex, Box, Link, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { ImMail4, ImLinkedin} from "react-icons/im";
import ShowQrButton from "../showQr/showQrButton";


const Links = () => {

return(
<>
<Flex m={{base: 4, md: 4}}>
  <Box className="social" flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" fontSize="sm" fontWeight="medium" textAlign="center">
    <Link href="https://github.com/medranomiler">
      <Icon id="github" as={FaGithub} color="gray.200" m={3} _hover={{ cursor: "pointer", transition: "all .4s ease-in-out", transform: "scale(1.3)" }} height={{
      base:50,
      md:100}} width={{
        base:50,
        md:100}} animation="glowGithub 2s ease-in-out infinite"/>
    </Link>
    <Link href="mailto:medranomiler@gmail.com">
    <Icon id="email" as={ImMail4} color="gray.200" m={3} _hover={{ cursor: "pointer", transition: "all .4s ease-in-out", transform: "scale(1.3)" }} height={{
      base:50,
      md:100}} width={{
        base:50,
        md:100}} animation="glowEmail 2s ease-in-out infinite"/>
    </Link>
    <Link href="https://linkedin.com/in/darrenmedrano">
    <Icon id="link" as={ImLinkedin} color="gray.200" m={3} _hover={{ cursor: "pointer", transition: "all .4s ease-in-out", transform: "scale(1.3)" }} height={{
      base:50,
      md:100}} width={{
        base:50,
        md:100}} animation="glowLink 2s ease-in-out infinite"/>  
    </Link>
    <ShowQrButton />
  </Box>
</Flex>
</>
)
}

export default Links;