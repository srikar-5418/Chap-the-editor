import { Box, Text, Textarea } from "@chakra-ui/react";

export default function InputBox({setInput}){
    return (
        <>
        <Box 
            width="100%" 
            height="100%" 
            display="flex"
            flexDirection="column"
            >
           <Text mb="2" color="gray.500">Input:</Text>
           <Textarea
                flex="1"
                resize="none"
                overflow="auto"
                placeholder="Give input here...."
                size="sm"
                marginBottom='2'
                onChange={(e) => setInput(e.target.value)}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '16px',
                        backgroundColor: 'gray.700',
                        cursor:'auto',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'gray.900',
                        cursor:'auto'
                    },
                }}
                />
        </Box>
                </>
    )
}