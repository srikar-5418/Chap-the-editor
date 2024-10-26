import {Box,Flex} from '@chakra-ui/react'
import SignInButton from './signIn'
import chapLogo from '/src/assets/chap_logo_70px.png';

export default function SignInBar(){
    return (
        <>
        <Box w='100%' p='1'  h='80px'  border='1px' borderRadius='10'>
                <Flex justifyContent="space-between" alignItems="center">
                <Flex mr="auto" ml="0.5%"   justifyContent='center' alignItems="center">
                <img src={chapLogo} ></img>
                    </Flex>
                    <Flex ml="auto" mr="0.5%"   justifyContent='center' alignItems="center">
                    <SignInButton/>      
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}