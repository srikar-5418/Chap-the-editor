
import { FaInfoCircle } from "react-icons/fa";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Text,
    Box,
    Button
  } from '@chakra-ui/react'

  import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'

export default function InfoButton(){
    
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <span onClick={onOpen} style={{marginLeft:'10px',marginTop:'2px'}}><FaInfoCircle cursor="pointer" size='15px'/></span>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='#0f0a19' color='white'>
          <ModalHeader fontSize='lg' as='b'>About Chap</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             <Text>CHAP is your AI coding partner, which will help you in solving DSA problems.</Text>
             <Text mt={1} as='i'> Instructions :</Text>
             <UnorderedList>
                <ListItem>Every question you ask to CHAP it gives a response which is split into three tabs (chat,code,input).It is done for better user experience.</ListItem>
                <ListItem>The buttons given in the bottom left are used to shift between tabs.</ListItem>
                <ListItem>The reset button next to tab buttons resets the chat.</ListItem>
                <ListItem>To switch between the responses provided by chap in code and input tabs the buttons on the right bottom are used. `{'<'}` to shift to previous response and `{'>'}` to shift to the next response.</ListItem>
             </UnorderedList>
          </ModalBody>

          <ModalFooter>
            <Box display='flex' alignItems='center' justifyContent='center' marginRight='auto' marginLeft='auto'>
                <Button variant='outline' colorScheme="green" onClick={onClose}>Close</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
}