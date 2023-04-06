import QR from "../QR/QR"
import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, useDisclosure, UseDisclosureProps, Icon, Box } from "@chakra-ui/react"
import { FaBitcoin, FaInfoCircle  } from "react-icons/fa";
import Link from "next/link"

interface ToggleQrDisplayResult {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useToggleQrDisplay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleQrDisplay: () => ToggleQrDisplayResult = () => {
    return { isOpen, onOpen, onClose };
  };
  return toggleQrDisplay;
}

const ShowQrButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleQrDisplay = useToggleQrDisplay();

  const { isOpen, onOpen, onClose } = toggleQrDisplay();

  return (
    <div onClick={onOpen}>
      {isVisible ? "" : (<Icon id="bitcoin" as={FaBitcoin} color="gray.200" m={3} _hover={{ cursor: "pointer", transition: "all .4s ease-in-out", transform: "scale(1.3)" }} height={{
      base:55,
      md:104}} width={{
        base:55,
        md:104}} animation="glowGithub 2s ease-in-out infinite"/>)}
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
