import { RepeatIcon} from '@chakra-ui/icons'
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    Tooltip,Divider,
  } from '@chakra-ui/react'
import { useDisclosure ,Button} from '@chakra-ui/react'
import { useRef } from 'react'
  export default function ResetCode({language,handleChangeLanguage}){
    const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
 async function resetcode()
 {
     onClose();
     let s=language
    await handleChangeLanguage(s);
 }
 const spanStyle={
  marginRight:'20px',
}
  return (
    <>
    <Tooltip hasArrow label='Reset'  closeOnClick={false}>
      <span style={spanStyle}>
        <RepeatIcon mb='1' color="white" onClick={onOpen}/>
      </span>
    </Tooltip>
      <Modal
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        >
        <ModalOverlay />

        <ModalContent bg='black' color='white' border='1px' borderColor='white' alignContent='center'>
          <ModalHeader textAlign='center'>Reset Code</ModalHeader>
          <ModalCloseButton />
          <Divider/>
          <ModalBody>
            Are you sure that you want to Reset all the code you have written?
          </ModalBody>
          <ModalFooter mr='31%'>
            <Button ref={cancelRef} colorScheme='white' variant='outline' _hover={{bg:'green.500', color:'white', borderColor:'green.500'}} onClick={onClose}>
              No
            </Button>
            <Button ref={cancelRef} colorScheme='white' variant='outline' _hover={{bg:'red.500', color:'white', borderColor:'red.500'}} ml={3} onClick={()=>resetcode()}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

  }