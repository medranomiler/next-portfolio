import { Box, Flex, Text } from "@chakra-ui/react"
import styles from "./profile.module.css"
import avatar from "./avatar.png"
import Image from "next/image"
import useFetchGitHubProfile from "../../hooks/useFetchGitHubProfile.js"


 
 const ProfileCard = () => {
  const [ username, bio ] = useFetchGitHubProfile()


    return(
    <>
    <Box bg="transparent" padding={10} borderRadius={20}>
          <Flex wrap="wrap" justify="center" align="center">
        <Image className={styles.image} src={avatar} />
          <div className={styles.cardText}>
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'><h2 className={styles.name}>{username}</h2></Text>
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'><p className={styles.bio}>{bio}</p></Text>
          </div>
          </Flex>
        </Box>
        </>
    )
}

export default ProfileCard;