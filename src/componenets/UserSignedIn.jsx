import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,Button,useDisclosure,
  Divider,
  VStack,Text,
  Avatar,useToast
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function UserLoggedIn({user,signOutFromApp}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  return(
      <>
       <Avatar src={user.photoURL} onClick={onOpen} mt='-1'mr='1'/>
              <Modal
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
              >
          <ModalOverlay />
          <ModalContent  bg='black' color='white' border='1px' borderColor='white' alignContent='center'>
          <ModalHeader textAlign='center'>👋 {user.email}</ModalHeader>
          <Divider color='gray.100'/>
          <ModalBody>
              <VStack m='4' mb='0'>
                  <Button><FcGoogle size='22' /><Text ml='2' onClick={signOutFromApp}>Sign Out</Text></Button>
              </VStack>
          </ModalBody> 
          <ModalFooter mr='35%'>
              <Button ref={cancelRef} colorScheme='white' variant='outline' _hover={{bg:'red.400', color:'white', borderColor:'red.500'}} onClick={onClose}>
              Cancel
              </Button>
          </ModalFooter>
          </ModalContent>
      </Modal>
      </>
  )
}
