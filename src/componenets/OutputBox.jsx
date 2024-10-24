import { Box, Text } from "@chakra-ui/react";


export default function OutputBox({output,error}){
  return (
    <>
    <Text ml='1' mb='1' mt='1' color='gray.500'>Output:</Text>
    <Box w='100%' h='40vh' p='10px'  minH='200px'border='1px' borderRadius='10' overflowX='auto' color={error?'red.400':'gray.500'}  sx={{'&::-webkit-scrollbar': {width: '16px',borderRadius: '12px',backgroundColor: `gray.700`,},'&::-webkit-scrollbar-thumb': {backgroundColor: `gray.900`,borderRadius:'12px'},}}>
    {output && Array.isArray(output) ? (
          output.map((line, i) => <Text key={i}>{line}</Text>)
        ) : (
          'Click "Run" to run the code'
        )}
    </Box>
    </>
  )
}