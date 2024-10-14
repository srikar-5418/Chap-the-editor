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
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRef, useState ,useEffect } from 'react'
import { auth,googleProvider,githubProvider } from '../assets/firebase';
import { signInWithPopup,onAuthStateChanged,signOut } from 'firebase/auth';

export default function SignInButton(){
    const [err,setErr]=useState("");
    const [picUrl,setPicUrl]=useState("");
    const [currUser,setCurrUser]=useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setCurrUser(currentUser); 
          setPicUrl(auth.currentUser.photoURL);
        });
        return () => unsubscribe();
      }, []);
        async function signInWithGoogle() {
            try{
             await signInWithPopup(auth,googleProvider);
             
            }catch(err){
            //  console.log(err);
               setErr(err);
            }
        }
        async function signInWithGithub() {
            try{
             await signInWithPopup(auth,githubProvider);
            }catch(err){
            //  console.log(err);
               setErr(err);
            }
        }
        async function signOutFromApp(){
            try{
                signOut(auth);
            } catch(err)
            {
                console.log(err)
            }
        }

    return (
        <>
           {currUser ? (<UserLoggedIn/>): (<UserLoggedOut/>)}
        </>
    )






    function UserLoggedOut(){
            
        const { isOpen, onOpen, onClose } = useDisclosure()
        const cancelRef = useRef()
        return (
                <>
                {/* {err&&} */}
                <Button colorScheme="white" flex='1' maxW="80%" maxH="70%" variant='outline' _hover={{bg:"white", color:'black'}} onClick={onOpen}>Sign In</Button>
                    <Modal
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                    >
                <ModalOverlay />

                <ModalContent  bg='black' color='white' border='1px' borderColor='white' alignContent='center'>
                <ModalHeader textAlign='center'>Sign In</ModalHeader>
                <Divider color='gray.100'/>
                <ModalBody>
                    <VStack m='4' mb='4'>
                        <Button><FcGoogle size='22' /><Text ml='2' onClick={signInWithGoogle}>Google</Text></Button>
                        <Button><FaGithub size='22' /><Text ml='2' onClick={signInWithGithub}>Github </Text></Button>
                    </VStack>
                        <Text fontSize='12' ml='3' mt='3'>
                        By signing in, you agree to Srikar's terms of service and privacy policy.
                        </Text>
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









    function UserLoggedIn(){
        const { isOpen, onOpen, onClose } = useDisclosure()
        const cancelRef = useRef()
        return(
            <>
             <Avatar src={picUrl} onClick={onOpen} mt='-1'mr='1'/>
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

}



