import { Box, Text } from "@chakra-ui/react";

export default function OutputBox({output, error}){
    return (
        <Box 
            width="100%" 
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <Text mb="2" color="gray.500">Output:</Text>
            <Box 
                flex="1"
                border="1px"
                p='2'
                borderRadius="10"
                overflowY="auto"
                color={error ? 'red.400' : 'gray.500'}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '16px',
                        borderRadius: '12px',
                        backgroundColor: 'gray.700',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'gray.900',
                        borderRadius: '12px'
                    },
                }}
            >
                {output && Array.isArray(output) ? (
                    output.map((line, i) => (
                        <Text key={i}>{line}</Text>
                    ))
                ) : (
                    'Click "Run" to run the code'
                )}
            </Box>
        </Box>
    )
}