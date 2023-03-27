import QR from "../QR/QR"
import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, useDisclosure, Icon, Box } from "@chakra-ui/react"
import { FaBitcoin, FaInfoCircle  } from "react-icons/fa";
import Link from "next/link"

const ShowQrButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleQrDisplay = (e) => {
    setIsVisible((prev) => !prev);
  };
  const { isOpen, onOpen, onClose } = useDisclosure(toggleQrDisplay)

  return (
    <div onClick={onOpen}>
      {isVisible ? "" : (<Icon as={FaBitcoin} color="gray.900" m={3} _hover={{ cursor: "pointer", transition: "all .4s ease-in-out", transform: "scale(1.3)" }} height={100} width={100}></Icon>)}
      <Modal onClose={onClose} isOpen={isOpen} isCentered >
        <ModalOverlay />
        <ModalContent bg="#171a1d" borderRadius="30">
          <ModalHeader display="flex" alignItems="center" justifyContent="center" color="white">Lightning Address<Box mx={2}><Link href="https://lightningaddress.com/"><FaInfoCircle /></Link></Box></ModalHeader>
          <ModalBody>
            <QR value="btcretriever@getalby.com" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ShowQrButton;