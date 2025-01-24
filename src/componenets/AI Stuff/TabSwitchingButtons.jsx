import {Box,Button,Tooltip} from "@chakra-ui/react"


import { IoReloadOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
export default function TabSwitchBottomButtom({currTab,setCurrTab,currentIndex,handleClearChat,setCurrentIndex,messages}){
    return (<>
    <Box height='6%' display='flex' flexDirection='row' >
                        <Box height='6%' display='flex' flexDirection='row' justifyContent='left' marginRight='auto'>
                            <Button size='xs' border='1px'  bg={currTab==='chat'?'green.600':'#0f0a19'} color='white' borderColor={currTab==='chat'?'green.600':'#0f0a19'} _hover={{ bg: 'white', color: 'black', borderColor:'white', border:'1px', borderRadius:'6px' }} m={1} mt={1.5} onClick={()=>{setCurrTab("chat")}}>Chat</Button>
                            <Button size='xs' isDisabled={currentIndex===-1}   border='1px' bg={currTab==='code'?'green.600':'#0f0a19'} color='white' borderColor={currTab==='code'?'green.600':'#0f0a19'} _hover={{ bg: 'white', color: 'black', borderColor:'white', border:'1px', borderRadius:'6px' }} m={1}  mt={1.5} onClick={()=>{setCurrTab("code")}}>Code</Button>
                            <Button size='xs'  isDisabled={currentIndex===-1}  border='1px' bg={currTab==='input'?'green.600':'#0f0a19'} color='white' borderColor={currTab==='input'?'green.600':'#0f0a19'} _hover={{ bg: 'white', color: 'black', borderColor:'white', border:'1px', borderRadius:'6px' }} m={1} mt={1.5} onClick={()=>{setCurrTab("input")}}>Input</Button>
                            <Tooltip label='Clear Chat' hasArrow fontSize='xs' placement="top"><span style={{marginLeft:'9px',marginTop:'11px'}} onClick={async()=>{await handleClearChat();}}><IoReloadOutline color='white' size='16px'/></span></Tooltip>
                            </Box>
                            <Box height='3%' display='flex' flexDirection='row' justifyContent='right' marginLeft='auto'>
                            {/* eslint-disable-next-line react/prop-types */}
                            <Button size='xs' isDisabled={messages.length<4} variant='outline' color='white' _hover={{ bg: 'white', color: 'black' }} m={1} mt={1.5} onClick={()=>{if(currentIndex!==0&&currentIndex!==1)setCurrentIndex(currentIndex-2);}}>{'<'}</Button>
                            {/* eslint-disable-next-line react/prop-types */}
                            <Button size='xs' isDisabled={messages.length<4} variant='outline' color='white' _hover={{ bg: 'white', color: 'black' }} m={1} mt={1.5} onClick={()=>{if(currentIndex!==messages.length-1&&currentIndex!==messages.length-2)setCurrentIndex(currentIndex+2);}}>{'>'}</Button>
                                </Box>
                    </Box>
    </>)
}