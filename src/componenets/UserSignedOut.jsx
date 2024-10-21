import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  VStack,
  Text,
  Divider,
  useDisclosure,useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaRegBookmark } from 'react-icons/fa';
import { auth,googleProvider,githubProvider } from '../assets/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function UserLoggedOut({reqFrom}) {
  const toast=useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  async function signInWithGoogle() {
    try{
     await signInWithPopup(auth,googleProvider);
     
    }catch(err){
        toast({
          title:"An Error Occured",
          description:err.message || "unable to Sign In",
          status:'error',
          duration:6000
        })
    }
}
async function signInWithGithub() {
    try{
     await signInWithPopup(auth,githubProvider);
    }catch(err){
      toast({
        title:"An Error Occured",
        description:err.message || "unable to run the code",
        status:'error',
        duration:6000
      })
    }
}
const spanStyle={
  marginRight:'7px',
}
  return (
    <>
    {
      reqFrom==="signInButton"?
      (
      <Button colorScheme="white" flex='1' maxW="80%" maxH="70%" variant='outline' _hover={{ bg: "white", color: 'black' }} onClick={onOpen}>
        Sign In
      </Button>):( <span style={spanStyle}>
         <Button color="white" bg="none" varient='ghost' _hover={{color:"white",bg:"none"}}onClick={onOpen}>
                  <FaRegBookmark color="white" bg="black" size="15"  cursor="pointer" />
                </Button>
      </span>)
      }
      <Modal
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg='black' color='white' border='1px' borderColor='white' alignContent='center'>
          <ModalHeader textAlign='center'>Sign In</ModalHeader>
          <Divider color='gray.100' />
          <ModalBody>
            <VStack m='4' mb='4'>
              <Button onClick={signInWithGoogle}>
                <FcGoogle size='22' /> <Text ml='2'>Google</Text>
              </Button>
              <Button onClick={signInWithGithub}>
                <FaGithub size='22' /> <Text ml='2'>Github</Text>
              </Button>
            </VStack>
            <Text fontSize='12' ml='3' mt='3'>
              By signing in, you agree to Srikar's terms of service and privacy policy.
            </Text>
          </ModalBody>
          <ModalFooter mr='35%'>
            <Button ref={cancelRef} colorScheme='white' variant='outline' _hover={{ bg: 'red.400', color: 'white', borderColor: 'red.500' }} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
