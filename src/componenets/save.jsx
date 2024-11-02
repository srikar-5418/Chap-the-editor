
import {  FaRegBookmark } from "react-icons/fa";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,Button,VStack,
    Tooltip,
  } from '@chakra-ui/react'
import SaveCodeButton from "./saveCodeButton";
import RetrieveCodeButton from "./retrieveCodeButton";
import UpdateCodeButton from "./updateCode";
import UserLoggedOut from "./UserSignedOut";
import { auth} from '../assets/firebase';
import { useEffect,useState,useRef } from "react";
import { onAuthStateChanged } from 'firebase/auth';

export default function SaveIcon({language,editorRef,handleLanguageChange,loadedCode}){
    const [currUser,setCurrUser]=useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setCurrUser(currentUser); 
        });
        return () => unsubscribe();
      }, []);
    const spanStyle={
        marginRight:'7px',
    }
return (
    <>
    {currUser?
(
//<Tooltip hasArrow label='save code'>
            <span style={spanStyle}>
                <Popover>
            <PopoverTrigger >
                <Button  color="white" bg="none" varient='ghost' _hover={{color:"white",bg:"none"}}>
                <Tooltip mt='1.5' hasArrow label="Save Code">
                    <span>
                  <FaRegBookmark color="white" bg="black" size="15"  cursor="pointer" />
                    </span>
                </Tooltip>
                </Button>
            </PopoverTrigger>
                <PopoverContent maxW='200px'color="white" bg="#0f0a19">
                <PopoverArrow color="white" bg="#0f0a19"/>
                <PopoverHeader textAlign='center'>Save Code</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                    {/* <Text>This feature will be released soon</Text> */}
                    <VStack>
                        {loadedCode===null?(<SaveCodeButton language={language} editorRef={editorRef}/>):(<UpdateCodeButton language={language} loadedCode={loadedCode} editorRef={editorRef}/>)}
                        <RetrieveCodeButton handleLanguageChange={handleLanguageChange}/>
                        </VStack>
                </PopoverBody>
                </PopoverContent>
            </Popover>
           
        </span>
    // </Tooltip>
        ):(<UserLoggedOut reqFrom={"saveButton"}/>)
    }
    </>
)

}