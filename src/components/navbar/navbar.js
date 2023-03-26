import { Button, Menu, MenuList, MenuButton, MenuItem, IconButton, Box } from "@chakra-ui/react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import devstrIcon from "../../../public/devstr-icon.png"

const Navbar = () => {


  return (
    <div>
      <Box w='100%' h="14" bgGradient='linear(to-r, cyan.700, purple.500)' className={styles.navbar}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          variant='outline'
        ><svg
          className={styles.icon}
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg></MenuButton>
        <MenuList bg="gray.50" >
          <MenuItem color="black"><Link href="/">Home</Link></MenuItem>
          <MenuItem color="black"><Link href="/profile">Portfolio</Link></MenuItem>
        </MenuList>
      </Menu>
      <h1 className={styles.title}></h1>
      </Box>
    </div>
  );
};

export default Navbar;
