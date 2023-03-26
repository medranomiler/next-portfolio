import { Spinner, Avatar, Box, Flex} from '@chakra-ui/react'
import { useState, useEffect } from "react";
import styles from "./profile.module.css"
import avatar from '../profileCard/avatar.png'
import Image from "next/image"
 
 function ProfileCard() {



    return(
    <>
    <Box bg="transparent" padding={10} borderRadius={20}>
          <Flex wrap="wrap" justify="center" align="center">
 
        <Image className={styles.image} src={avatar} />

          <div className={styles.cardText}>
            <h2 className={styles.name}>Darren Medrano</h2>
            <p className={styles.bio}>MERN Stack/ Open Source developer</p>
          </div>
          </Flex>
        </Box>
        </>
    )
}

export default ProfileCard