import { Menu, MenuList, MenuButton, MenuItem, IconButton, Box } from "@chakra-ui/react";
import styles from "./styles.module.css";
import Link from "next/link";


const Navbar = () => {


  return (
    <div>
      <Box w="100%" h="14" 
            backgroundColor="black"
      className={styles.navbar}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="outline"
          style={{border: "#f002f8b3",
  backgroundColor: "black", animation: "glow 2s ease-in-out infinite", color:"white"}}
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
        <MenuList style={{border: "red",
  backgroundColor: "black", animation: "glow 2s ease-in-out infinite", color:"white"}} >
          <MenuItem style={{border: "red",
  backgroundColor: "black", color:"white"}}><Link href="/">Home</Link></MenuItem>
          <MenuItem style={{border: "red",
  backgroundColor: "black", color:"white"}}><Link href="/build">Build</Link></MenuItem>
        </MenuList>
      </Menu>
      <h1 className={styles.title}></h1>
      </Box>
    </div>
  );
};

export default Navbar;
