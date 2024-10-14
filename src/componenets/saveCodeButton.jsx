import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Text,useDisclosure,Button,Input,
    HStack,VStack,
    Box
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from '../languageInfo'

export default function SaveCodeButton({language}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Save Code</Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='black' color='white'>
                <ModalHeader textAlign='center'>Save Code</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl isRequired>
                    <FormLabel>Name of the File</FormLabel>
                    <Input placeholder='Name' />
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
                    <Button colorScheme='blue' mr='43%' onClick={onClose}>
                    Save
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}