import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,Button,
   Box,Flex,
  } from '@chakra-ui/react'
  
import { LANGUAGE_VERSIONS } from '../languageInfo'
import LanuageInfo from './LanguageInfo'
import ResetCode from './ResetCode'
import SetValues from './settings'
import SaveIcon from './save'
const languages=Object.entries(LANGUAGE_VERSIONS)

// eslint-disable-next-line react/prop-types
export default function LanguageSelector({language,handleLanguageChange,fntSize,handleFontChange,tbSize,handleTabSizeChange,toggleVimMode,isVimEnabled,isWordWrap,toggleWordWrap,editorRef,loadedCode}){
   
    return (
        <Box ml={2} mb={2}>
        <Flex justifyContent="space-between" alignItems="center">
            <Menu isLazy maxW="200px">
                {/* <Tooltip hasArrow label="Select language" closeOnClick={false}> */}
                    <MenuButton
                        color="white"
                        bg="black"
                        as={Button}
                        border="solid"
                        borderSize="0px"
                        _hover={{ bg: 'white', color: 'black' }}
                        _action={{ bg: 'white', color: 'black' }}
                        _expanded={{ border: 'none', color: 'white', bgGradient: 'linear(to-r, teal.500, green.500)' }}
                    >
                        {language}
                    </MenuButton>
                {/* </Tooltip> */}
                <MenuList minW="150px" maxH='150px' border="none" color="white" bg="black" overflow="auto"  sx={{'&::-webkit-scrollbar': {width: '16px',borderRadius: '8px',backgroundColor: `gray.700`,},'&::-webkit-scrollbar-thumb': {backgroundColor: `gray.900`,borderRadius:'6px'},}}>
                    {languages.map(([language_got]) => (
                        <MenuItem
                            key={language_got}
                            color={language_got === language ? 'blue.400' : ""}
                            bg={language_got === language ? 'gray.700' : 'transparent'}
                            _hover={{ bg: 'white', color: 'black' }}
                            onClick={() => handleLanguageChange(language_got)}
                        >
                            {language_got}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
                    <LanuageInfo language={language}/>
            <Flex ml="auto" alignItems="center">
                    <SaveIcon language={language} editorRef={editorRef} handleLanguageChange={handleLanguageChange} loadedCode={loadedCode}/>
                    <ResetCode language={language} handleChangeLanguage={handleLanguageChange} loadedCode={loadedCode}/>
                    <SetValues fntSize={fntSize}  handleFontChange={handleFontChange} tbSize={tbSize} handleTabSizeChange={handleTabSizeChange} toggleVimMode={toggleVimMode} isVimEnabled={isVimEnabled} isWordWrap={isWordWrap} toggleWordWrap={toggleWordWrap}/>
            </Flex>
        </Flex>
    </Box>
);
    
}