import {Box,Flex,Button,Text} from '@chakra-ui/react'
import SignInButton from './signIn'


export default function SignInBar(){
    return (
        <>
        <Box w='100%' p='1'  mt='-4' h='80px' mb='2' border='1px' borderRadius='10'>
                <Flex justifyContent="space-between" alignItems="center">
                <Flex mr="auto" ml="0.5%"   justifyContent='center' alignItems="center">
                <img src="https://github.com/srikar-5418/Chap-the-editor/blob/main/src/assets/chap_logo_70px.png" ></img>
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