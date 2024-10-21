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
import { useRef} from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from "react-icons/fa";
import { signOut } from 'firebase/auth';
import { auth } from '../assets/firebase';

export default function UserLoggedIn(){
    const toast=useToast();

        async function signOutFromApp(){
            try{
               await signOut(auth);
            } catch(err)
            {
                toast({
                    title:"An Error Occured",
                    description:err.message || "unable to Sign Out",
                    status:'error',
                    duration:6000
                  })
            }
        }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  return(
      <>
       <Avatar src={auth.currentUser.photoURL} onClick={onOpen} mt='-1'mr='1'/>
              <Modal
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
              >
          <ModalOverlay />
          <ModalContent  bg='black' color='white' border='1px' borderColor='white' alignContent='center'>
          <ModalHeader textAlign='center'>👋 {auth.currentUser.email}</ModalHeader>
          <Divider color='gray.100'/>
          <ModalBody>
              <VStack m='4' mb='0'>
                  <Button>{auth.currentUser.providerData[0].providerId==='google.com'?(<FcGoogle size='22' />):(<FaGithub size='22' /> )}<Text ml='2' onClick={signOutFromApp}>Sign Out</Text></Button>
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
