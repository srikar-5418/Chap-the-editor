import { Box, Text,Textarea } from "@chakra-ui/react";

export default function InputBox({setInput}){
    return (
        <> 
        <Box w='100%' h='30vh' mb='1' minH='150px'>
           <Text ml='1' mb='2'>Input:</Text>
           <Textarea mb='2' w='100%' h='80%' resize='none' overflow='auto' placeholder='Give input here....'size='sm' onChange={(e)=>setInput(e.target.value)}  sx={{'&::-webkit-scrollbar': {width: '16px',backgroundColor: `gray.700`,},'&::-webkit-scrollbar-thumb': {backgroundColor: `gray.900`,},}}/>
        </Box>
        </>
    )
}