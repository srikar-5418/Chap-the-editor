import {Box,Tooltip,Button} from "@chakra-ui/react"

import { FaRegCopy } from "react-icons/fa";
import { LuClipboardCopy } from "react-icons/lu";

import MarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

// eslint-disable-next-line react/prop-types
export default function CodeTab({currentIndex,codeArr,handleLanguageChange,toast,onClose}){
    return (
    <>
                                <Box  borderRadius="2" mb="10px" width="98%"height="auto"bg="#0f0a19"p={2}>
                                 {/* eslint-disable-next-line react/prop-types */}
                                <MarkDown remarkPlugins={[remarkGfm]}>{currentIndex!==-1?(codeArr[Math.floor((currentIndex/2))].codeExplanation):('')}</MarkDown></Box>
                                <Box position="relative" borderRadius="2" mb="10px" width="98%"height="auto"bg="#0f0a19"p={2}>
                                    
                                 {/* eslint-disable-next-line react/prop-types */}
                               {(currentIndex!==-1&&codeArr[Math.floor((currentIndex/2))].codeLanguage!=="")?(<> <Box position="absolute" top="10px" right="10px" display="flex" gap="10px">
                                 {/* eslint-disable-next-line react/prop-types */}
                                <Tooltip label='Copy to editor' hasArrow fontSize='2xs'><Button size='xs' backgroundColor="gray.400" mt={1} onClick={()=>{handleLanguageChange(codeArr[Math.floor((currentIndex/2))].codeLanguage,"Ai",codeArr[Math.floor((currentIndex/2))].code);onClose();}}><FaRegCopy/></Button></Tooltip>
                                
                                 {/* eslint-disable-next-line react/prop-types */}
                                <Tooltip  label='Copy to Clipboard' hasArrow fontSize='2xs'><Button size='xs' backgroundColor="gray.400" mt={1} mr={1} onClick={()=>{navigator.clipboard.writeText(codeArr[Math.floor((currentIndex/2))].code).then(toast({title:'Copied to Clipboard',size:'sm',status: "success",duration:'500'}))}}><LuClipboardCopy/></Button></Tooltip>
                                
                                 {/* eslint-disable-next-line react/prop-types */}
      </Box> <SyntaxHighlighter language={codeArr[Math.floor((currentIndex/2))].codeLanguage} style={vs2015} className='code-block' customStyle={{borderRadius:'10px',padding:'10px',fontSize:'15px'}}>{codeArr[Math.floor((currentIndex/2))].code}</SyntaxHighlighter></>):('')}</Box> </>)
}