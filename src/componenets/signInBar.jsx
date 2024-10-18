import {Box,Flex,Button,Text} from '@chakra-ui/react'
import SignInButton from './signIn'


export default function SignInBar(){
    return (
        <>
        <Box w='100%' p='1'  mt='-4' h='80px' mb='2' border='1px' borderRadius='10'>
                <Flex justifyContent="space-between" alignItems="center">
                <Flex mr="auto" ml="0.5%"   justifyContent='center' alignItems="center">
                {/* <Button colorScheme="white" flex='1' maxW="80%" maxH="70%" variant='ghost' ><Text bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}
  bgClip='text' fontSize='30' fontWeight='800'>CHAP</Text></Button> */}
                <img src="../src/assets/chap_logo_70px.png" ></img>
                    </Flex>
                    {/* <SignInButton/>       */}
                    <Flex ml="auto" mr="0.5%"   justifyContent='center' alignItems="center">
                    <SignInButton/>      
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}