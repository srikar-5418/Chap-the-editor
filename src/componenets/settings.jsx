
import { SettingsIcon,ChevronDownIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    Tooltip,Divider,Button,
    VStack,useDisclosure,
    HStack,Text,Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,FormControl,FormLabel,Switch,
  } from '@chakra-ui/react'

import { FONT_SIZE,TAB_SPACES } from '../languageInfo'
import { useRef } from 'react'
// eslint-disable-next-line react/prop-types
export default function SetValues({fntSize,handleFontChange,tbSize,handleTabSizeChange,toggleVimMode,isVimEnabled,isWordWrap,toggleWordWrap}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const spanStyle={
        marginRight:'20px',
    }
  return (
    <>
    <Tooltip hasArrow label='Settings' closeOnClick={false}>
      <span style={spanStyle}>
        <SettingsIcon color='white'  mb='1'onClick={onOpen} cursor='pointer'/>
      </span>
    </Tooltip>
      <Modal motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered>
        <ModalOverlay />
        <ModalContent color='white' bg='black' border='1px' borderColor='white' alignContent='center'>
          <ModalHeader textAlign='center'>Settings</ModalHeader>
          <ModalCloseButton />
          <Divider/>
          <ModalBody>
             <VStack>
                <HStack>
                    <Box  ml='0'>
                    <Text textAlign='left'fontSize='20' fontWeight='700'>Font Size</Text>
                    <Text textAlign='left'>Change the font size of the editor</Text>
                    </Box>
                    <Menu isLazy minW='150px' ml='12' mr='-1'>
                    <MenuButton ml='12' minW='120px' as={Button}  color="white"
                        bg="blue.500"  _hover={{ bg: 'white', color: 'black' }}
                        _action={{ bg: 'white', color: 'black' }}  _expanded={{ bg: 'white', color: 'black' }} rightIcon={<ChevronDownIcon />}>
                    {fntSize}
                        </MenuButton>
                        <MenuList  color="white"
                        bg="blue.500" minW='100px' maxH='100px'overflow='auto' sx={{'&::-webkit-scrollbar': {width: '16px',borderRadius: '8px',backgroundColor: `blue.500`,},'&::-webkit-scrollbar-thumb': {backgroundColor: `blue.700`,borderRadius:'6px'},}}>
                            {
                              FONT_SIZE.map((fontSize)=>(
                                <MenuItem  key={fontSize}  color="white"
                                bg="blue.500" _hover={{bg:"blue.600"}}onClick={()=>handleFontChange(fontSize)}>{fontSize}
                                </MenuItem>
                              ))
                            }
                        </MenuList>
                    </Menu>
                </HStack>
                <HStack>
                    <Box  ml='-1'>
                    <Text textAlign='left'fontSize='20' fontWeight='700'>Tab Size</Text>
                    <Text textAlign='left'>Change the Tab size of the editor</Text>
                    </Box>
                    <Menu isLazy minW='150px' ml='12' mr='-1'>
                    <MenuButton ml='10' minW='50px' as={Button} color="white"
                        bg="blue.500"  _hover={{ bg: 'white', color: 'black' }}
                        _action={{ bg: 'white', color: 'black' }}  _expanded={{ bg: 'white', color: 'black' }}  rightIcon={<ChevronDownIcon />}
                    >
                    {tbSize}
                        </MenuButton>
                        <MenuList minW='100px' maxH='100px'overflow='auto'  color="white"
                                bg="blue.500">
                            {
                              TAB_SPACES.map((tabSize)=>(
                                <MenuItem   color="white"
                                bg="blue.500" _hover={{bg:"blue.600"}} key={tabSize} onClick={()=>handleTabSizeChange(tabSize)}>{tabSize}
                                </MenuItem>
                              ))
                            }
                        </MenuList>
                    </Menu>
                </HStack>
                <Divider/>
                <VStack>
                <FormControl display='flex' alignItems='center' textAlign='left'>
                    <FormLabel ml='-10'htmlFor='email-alerts' mb='0'>
                      Wanna use Vim
                    </FormLabel>
                    <Switch id='email-alerts' isChecked={isVimEnabled} onChange={toggleVimMode}/>
                  </FormControl>
                  <FormControl display='flex' alignItems='center'>
                    <FormLabel ml='-5' htmlFor='email-alerts2' mb='0'>
                       Word wrap
                    </FormLabel>
                    <Switch ml='3'id='email-alerts2' isChecked={isWordWrap} onChange={toggleWordWrap}/>
                  </FormControl>
                   
                </VStack>
             </VStack>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}