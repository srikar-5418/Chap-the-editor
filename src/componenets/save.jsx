
import {  FaRegBookmark } from "react-icons/fa";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,Button,
    VStack,
    Text
  } from '@chakra-ui/react'
import SaveCodeButton from "./saveCodeButton";
import RetrieveCodeButton from "./retrieveCodeButton";

export default function SaveIcon({language}){
    const spanStyle={
        marginRight:'7px',
    }
return (
    <>
    {/* <Tooltip hasArrow label='save code'> */}
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
    {/* </Tooltip> */}
    </>
)

}