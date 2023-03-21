import { Button, Menu, MenuList, MenuButton, MenuItem, IconButton, HamburgerIcon } from "@chakra-ui/react";
import styles from "./styles.module.css";
import Link from "next/link";

const Navbar = () => {


  return (
    <div className={styles.navbar}>
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
          <MenuItem color="black"><Link href="/contact">Contact</Link></MenuItem>
        </MenuList>
      </Menu>
      <h1 className={styles.title} fontSize={"xl"}>Darren Medrano</h1>
    </div>
  );
};

export default Navbar;
