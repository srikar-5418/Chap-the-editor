import {Box,Tooltip,Button,Textarea} from "@chakra-ui/react"

import { FaRegCopy } from "react-icons/fa";
import { LuClipboardCopy } from "react-icons/lu";

import MarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


// eslint-disable-next-line react/prop-types
export default function InputTab({currentIndex,inputArr,setInput,onClose,toast}){
return (<>
                    <Box  borderRadius="2" mb="10px" width="98%"height="auto"bg="#0f0a19"p={2}>

                {/* eslint-disable-next-line react/prop-types */}
                <MarkDown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{currentIndex!==-1?(inputArr[Math.floor((currentIndex/2))].inputExplanation):('')}</MarkDown></Box>
                <Box position="relative" borderRadius="2" mb="10px" width="98%"height="auto"bg="#0f0a19"p={2}>
                {/* eslint-disable-next-line react/prop-types */}
                {(currentIndex!==-1&&inputArr[Math.floor((currentIndex/2))].input!=="")?(<>
                {/* eslint-disable-next-line react/prop-types */}
                <Box zIndex='2000' position="absolute" top="10px" right="10px" display="flex" gap="10px"><Tooltip  label='Copy to Input' hasArrow fontSize='2xs'><Button size='xs' mt={1} backgroundColor="gray.400" onClick={()=>{setInput(inputArr[Math.floor((currentIndex/2))].input);onClose();}}><FaRegCopy/></Button></Tooltip><Tooltip  label='Copy to Clipboard' hasArrow fontSize='2xs'><Button size='xs' backgroundColor="gray.400" mt={1} mr={2} onClick={()=>{navigator.clipboard.writeText(inputArr[Math.floor((currentIndex/2))].input).then(toast({title:'Copied to Clipboard',size:'sm',status: "success",duration:'500'}))}}><LuClipboardCopy/></Button></Tooltip></Box>
                <Textarea minH='200px' borderRadius='5px' resize="none" overflow="auto"  size="sm" marginBottom='2' sx={{
                '&::-webkit-scrollbar': {
                width: '8px',
                backgroundColor: 'gray.700',
                borderRadius:'10px',
                cursor:'auto',
                },
                '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'gray.900',
                borderRadius:'10px',
                cursor:'auto'
                },
                // eslint-disable-next-line react/prop-types
                }}>{currentIndex!==-1?(inputArr[Math.floor((currentIndex/2))].input):('')}</Textarea></>):("")}</Box>
                </>
    )
}