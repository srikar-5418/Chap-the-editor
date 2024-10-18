import { Box, Divider, Flex, } from "@chakra-ui/react";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import SignInBar from "./signInBar";

export default function OutputInput({output,setInput}){
   
    return(
        <>
        <Box w='42vw' h='93vh' minH='500px' minW='100px'> 
            <Flex h='13%'>
            <SignInBar/>
            </Flex>
            <Box w='100%' p='10px' border='1px' h='87%' minH='350px' borderRadius='10'>
            <InputBox setInput={setInput}/>
            <Divider mt='2'/>
            <OutputBox output={output}/>
            </Box>
        </Box>
        </>
    )
}