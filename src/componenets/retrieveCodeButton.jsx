

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,Button,Input
  } from '@chakra-ui/react'
import { useRef } from 'react'

export default function RetrieveCodeButton(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
        return (
            <>
            <Button ref={btnRef} onClick={onOpen}>Retrieve Code</Button>
                    <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}>
                    <DrawerOverlay />
                    <DrawerContent bg='black' color='white'>
                    <DrawerCloseButton />
                    <DrawerHeader>Select code to retrieve</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>
        )
}