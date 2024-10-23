import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Text,useDisclosure,Button,Input,
    HStack,VStack,
    Box,
    Divider,useToast
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from '../languageInfo'
import { db } from '../assets/firebase'
import { setDoc,doc, arrayUnion, addDoc, collection } from 'firebase/firestore'
import { auth } from '../assets/firebase'
import { useState } from 'react'

export default function SaveCodeButton({language,editorRef}){
    const toast=useToast();
    const [title,setTitle]=useState("");
    async function saveCode(){
        try{
                if(title.length!==0){

                    const userRef= doc(db,"user",auth.currentUser.uid);
                    const data= {
                    Name:title,
                    code:editorRef.current.getValue(),
                    language:language,
                    version:LANGUAGE_VERSIONS[language],
                }
                const codeRef=await addDoc(collection(db,"code"),data);
                const userAddData={
                    id:codeRef.id,
                    name:title,
                    language:language,
                }
                await setDoc(userRef,{
                    code:arrayUnion(userAddData),
                },{merge:true})
            }
        }catch(err){
            toast({
                title:"An Error Occured",
                description:err.message || "unable to save the code",
                status:'error',
                duration:3000
              })
        }
        finally{
            if(title.length!==0){
                onClose();
            }
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Save Code</Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='black' color='white' border='1px' borderColor='white'>
                <ModalHeader textAlign='center'>Save Code</ModalHeader>
                <Divider/>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl isRequired>
                    <FormLabel>Name of the File</FormLabel>
                    <Input placeholder='Name' maxLength={15} onChange={e=>setTitle(e.target.value)}/>
                    <HStack minW='100%'>
                        <VStack mt='2' w='50%'>
                            <FormControl>
                            <FormLabel>Language</FormLabel>
                            <Box textAlign='left' mt='' pl='3% 'w='100%' h='40px' border='1px' color='gray.200' borderColor='white' borderRadius='5' ><Text ml='5%' mt='2.5%' color='gray'>{language}</Text></Box>
                            </FormControl>
                        </VStack>
                        <VStack mt='2' w='50%'>
                            <FormControl>
                            <FormLabel>Version</FormLabel>
                            <Box textAlign='left' mt='' pl='3% 'w='100%' h='40px' border='1px' color='gray.200' borderColor='white' borderRadius='5' ><Text ml='2.5%' mt='3.5%' color='gray'>{LANGUAGE_VERSIONS[language]}</Text></Box>
                            </FormControl>
                        </VStack>
                    </HStack>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr='43%' onClick={()=>saveCode()}>
                    Save
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}