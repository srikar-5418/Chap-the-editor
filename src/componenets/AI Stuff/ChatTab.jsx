import {Box,Button} from "@chakra-ui/react"

import { LuBug } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { LiaRandomSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { LuTextCursorInput } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";


import MarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// eslint-disable-next-line react/prop-types
export default function ChatTab({currentIndex,setTextBoxValue,messages,language,lastRef}){
    return  (<>           
    <Box overflowY="auto" overflowX="hidden" height="calc(100vh - 100px)" sx={{ width:'100%',
                        '&::-webkit-scrollbar': {marginRight:'-20px',width: '4px',borderRadius: '12px',backgroundColor: '#0f0a19',},
                        '&::-webkit-scrollbar-thumb': {backgroundColor: 'gray.700',borderRadius: '12px',},}}>
                             {currentIndex === -1 ? (
                            <Box height="100%" width="100%" display="flex" flexDirection={"column"} alignItems='flex-start' justifyContent='center'>
                                <Button variant='outline' color="gray" borderColor='gray' size='sm' mb={2} fontSize='md' _hover={{color:'black',bg:'white'}} onClick={()=>{setTextBoxValue("Fix the errors in my code")}}><span style={{marginRight:'7px',marginTop:'1px'}}><LuBug color="orange"/></span>Fix the errors in my code</Button>
                                <Button variant='outline' color="gray" borderColor='gray' size='sm' mb={2} fontSize='md' _hover={{color:'black',bg:'white'}} onClick={()=>{setTextBoxValue("Complete my Code")}}><span style={{marginRight:'7px',marginTop:'1px'}}><FaCode color="orange"/></span>Complete my Code...</Button>
                                <Button variant='outline' color="gray" borderColor='gray' size='sm' mb={2} fontSize='md' _hover={{color:'black',bg:'white'}} onClick={()=>{setTextBoxValue("Give a Boilerplate for")}}><span style={{marginRight:'7px',marginTop:'1px'}}><CgSmartHomeBoiler color="orange"/></span>Give a Boilerplate for...</Button>
                                <Button variant='outline' color="gray" borderColor='gray' size='sm' mb={2} fontSize='md' _hover={{color:'black',bg:'white'}} onClick={()=>{setTextBoxValue("Give a random DSA question from")}}><span style={{marginRight:'7px',marginTop:'1px'}}><LiaRandomSolid color="orange" /></span>Give a random DSA question from...</Button>
                                <Button variant='outline' color="gray" borderColor='gray' size='sm' mb={2} fontSize='md' _hover={{color:'black',bg:'white'}} onClick={()=>{setTextBoxValue("Time and space complexity of code")}}><span style={{marginRight:'7px',marginTop:'1px'}}><LuAlarmClock color="orange"/></span>Time and space complexity of code...</Button>
                                <Button variant='outline' color="gray" borderColor='gray' size='sm' mb={2} fontSize='md' _hover={{color:'black',bg:'white'}} onClick={()=>{setTextBoxValue(`Convert the code from ${language} to`)}}><span style={{marginRight:'7px',marginTop:'1px'}}><LiaExchangeAltSolid color="orange"/></span>Convert the code from {language} to...</Button>
                                <Button variant='outline' color="gray" borderColor='gray' size='sm' mb={2} fontSize='md' _hover={{color:'black',bg:'white'}} onClick={()=>{setTextBoxValue("Provide better test cases as input")}}><span style={{marginRight:'7px',marginTop:'1px'}}><LuTextCursorInput color="orange"/></span>Provide better test cases as input...</Button>
                                <Button variant='outline' color="gray" borderColor='gray' size='sm' mb={2} fontSize='md' _hover={{color:'black',bg:'white'}} onClick={()=>{setTextBoxValue("Optimize my code")}}><span style={{marginRight:'7px',marginTop:'1px'}}><FaRunning color="orange"/></span>Optimize my code...</Button>
                            </Box>
                            ): (
                        // eslint-disable-next-line react/prop-types
                        messages.map((currentMessage, index) => (
                        currentMessage.Asked ? (
                            <Box key={index} ref={index === currentIndex ? lastRef : null} display="flex" justifyContent="flex-end" width="80%" ml="20%" borderRadius="2" mb="10px" height="auto" color="white">
                            <Box width="auto" height="auto" bg="green.500" borderRadius={10} p={2} mr='2'>{currentMessage.message}</Box>
                            </Box>) : (
                            <Box key={index} ref={index === currentIndex ? lastRef : null} borderRadius="2" mb="10px" width="98%"height="auto"bg="#0f0a19"p={2}>
                            <MarkDown remarkPlugins={[remarkGfm]}>{currentMessage.message}</MarkDown></Box>
                        )
                        )))}
                    </Box>
    </>)
}