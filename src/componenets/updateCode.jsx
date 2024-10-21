import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Text,useDisclosure,Button,
    HStack,VStack,
    Box,
    Divider,useToast
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from '../languageInfo'
import { db } from '../assets/firebase';
import { doc,getDoc,updateDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function UpdateCodeButton({language,loadedCode,editorRef}){
    const toast=useToast();
    const [codeRef,setCodeRef]=useState(null);
    const [title,setTitle]=useState("");
    async function LoadUpdateCode() {
        try {
            const currCodeRef = doc(db, "code", loadedCode); 
            const docSnap = await getDoc(currCodeRef);
            if (docSnap.exists()) {
                setCodeRef(currCodeRef); 
                setTitle(docSnap.data().Name);
            } else {
                throw new Error("Document does not exist");
            }
        } catch (err) {
            console.log(err);
            toast({
                title: "An Error Occurred",
                description: err.message || "Unable to update code",
                status: 'error',
                duration: 3000
            });
        } finally {
            onOpen();
        }
    }
    async function updateCode(){
        try{
            
            await updateDoc(codeRef,{
                code:editorRef.current.getValue(),
            })

        }catch(err){
            console.log(err)
            toast({
                title:"An Error Occured",
                    description:err.message || "unable to update code",
                    status:'error',
                    duration:3000
            })
        }finally{
            onClose();
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
             <Button onClick={async()=>await LoadUpdateCode()}>Update Code</Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='black' color='white' border='1px' borderColor='white'>
                <ModalHeader textAlign='center'>Update Code</ModalHeader>
                <Divider/>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                    <FormControl>
                    <FormLabel >Name of the File</FormLabel>
                    <Box textAlign='left'  w='100%' h='40px' border='1px' color='gray.200' borderColor='white' borderRadius='5' ><Text ml='3%' mt='1.5%' color='gray'>{title}</Text></Box>
                    <HStack minW='100%'>
                        <VStack mt='2' w='50%'>
                            <FormControl>
                            <FormLabel>Language</FormLabel>
                            <Box textAlign='left'  pl='3% 'w='100%' h='40px' border='1px' color='gray.200' borderColor='white' borderRadius='5' ><Text ml='5%' mt='2.5%' color='gray'>{language}</Text></Box>
                            </FormControl>
                        </VStack>
                        <VStack mt='2' w='50%'>
                            <FormControl>
                            <FormLabel>Version</FormLabel>
                            <Box textAlign='left'  pl='3% 'w='100%' h='40px' border='1px' color='gray.200' borderColor='white' borderRadius='5' ><Text ml='2.5%' mt='3.5%' color='gray'>{LANGUAGE_VERSIONS[language]}</Text></Box>
                            </FormControl>
                        </VStack>
                    </HStack>
                    </FormControl>
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr='43%' onClick={async()=> await updateCode()}>
                    Update
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}