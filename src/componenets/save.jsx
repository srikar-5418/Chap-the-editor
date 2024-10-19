
import {  FaRegBookmark } from "react-icons/fa";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,Button,
    Text
  } from '@chakra-ui/react'
import SaveCodeButton from "./saveCodeButton";
import RetrieveCodeButton from "./retrieveCodeButton";
import UserLoggedOut from "./UserSignedOut";
import { auth} from '../assets/firebase';
import { useEffect,useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';

export default function SaveIcon({language}){
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
            <PopoverTrigger>
                <Button color="white" bg="none" varient='ghost' _hover={{color:"white",bg:"none"}}>
                  <FaRegBookmark color="white" bg="black" size="15"  cursor="pointer" />
                </Button>
            </PopoverTrigger>
                <PopoverContent maxW='200px'color="white" bg="#0f0a19">
                <PopoverArrow color="white" bg="#0f0a19"/>
                <PopoverHeader textAlign='center'>Save Code</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                    <Text>This feature will be released soon</Text>
                    {/* <VStack>
                        <SaveCodeButton language={language}/>
                        <RetrieveCodeButton/>
                        </VStack> */}
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