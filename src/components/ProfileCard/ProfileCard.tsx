import { Box, Flex, Text } from "@chakra-ui/react"
import styles from "./profile.module.css"
import avatar from "./avatar.png"
import Image from "next/image"
import useFetchGitHubProfile from "../../hooks/useFetchGitHubProfile"


 
 const ProfileCard = () => {
  const [ username, bio ] = useFetchGitHubProfile()


    return(
    <>
    <Box bg="transparent" padding={10} borderRadius={20}>
          <Flex wrap="wrap" justify="center" align="center">
        <Image alt="profileImage" className={styles.image} src={avatar} />
          <div className={styles.cardText}>
            <Text className={styles.name} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
              <h2>{username}</h2>
              </Text>
            <Text color="white"><p className={styles.bio}>{bio}</p></Text>
          </div>
          </Flex>
        </Box>
        </>
    )
}

export default ProfileCard;