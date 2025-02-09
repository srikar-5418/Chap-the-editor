import { BsStars } from "react-icons/bs";

import { Box, Button,Text,Textarea,useDisclosure, useToast } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
  } from '@chakra-ui/react'
import { useEffect, useRef, useState } from "react";
import './CodeBlock.css'

import ChatTab from "./ChatTab";
import CodeAndInputBox from "./CodeNdInput";
import TabSwitchBottomButtom from "./TabSwitchingButtons";
import InfoButton from "../InfoButton";

// eslint-disable-next-line react/prop-types
export default function Ai({chat,toSetChat,input,output,language,setInput,value,handleLanguageChange}){
    const [textBoxValue,setTextBoxValue]=useState("");
    const [messages,setMessages]=useState([])
    const [codeArr,setCodeArr]=useState([])
    const [inputArr,setInputArr]=useState([])
    const [currTab,setCurrTab]=useState("chat");
    const [isLoading,setIsLoadIng]=useState(false)
    const [checkOpened,setCheckOpened]=useState(false);
    const [currentIndex,setCurrentIndex]=useState(-1);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const toast=useToast();
    const lastRef = useRef("null")
    const titleRef=useRef("null")
    async function onAsk(){
        try{
                setCurrTab("chat");
                setIsLoadIng(true);
                setMessages((tempMessageArray)=>[...tempMessageArray,{message:textBoxValue,Asked:true}]);
                const inputStruct=`{chatInstructionFromUser:${textBoxValue},currentLanguage:${language},currentCodeOnEditor:${value},currentInputGivenToCode:${input},currentOutput:${output}}`
                // eslint-disable-next-line react/prop-types
                const reply=await chat.sendMessage(inputStruct);
                let response=reply.response.text();
                // console.log(response)
                response=response.substring(7,response.length-4).trim();
                response=JSON.parse(`${response}`);
                setMessages((tempMessageArray)=>[...tempMessageArray,{message:response.firstPart.explanation,Asked:false}]);
                setCodeArr((tempMessageArray)=>[...tempMessageArray,{title:response.title,codeExplanation:response.secondPart.briefCodeExplanation,codeLanguage:response.secondPart.codeLanguage,code:response.secondPart.code}]);
                setInputArr((tempMessageArray)=>[...tempMessageArray,{title:response.title,inputExplanation:response.thirdPart.briefInputExplanation,input:response.thirdPart.improvedInput}]);
            }
            catch(err){
                toast({
                    title:"An Error Occured Resend the message",
                    description:err.message || "unable to send instruction",
                    status:'error',
                    duration:4000
                  })
                messages.pop();
                setCurrentIndex(currentIndex-2);
            }
            finally{
                setIsLoadIng(false);
                setCurrentIndex(currentIndex+2);
        }
    }
    async function handleClearChat(){
        setCurrTab("chat");
        await toSetChat();
        setCurrentIndex(-1);
        setMessages([]);
        setCodeArr([]);
        setInputArr([]);
    }
    useEffect(()=>{
        if(currentIndex!==-1&&currTab==='chat'){

            if ((messages.length > 0 && lastRef.current)||(checkOpened&&messages.length > 0 && lastRef.current)) {
                lastRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
        else if(currTab!=='chat'&&titleRef!==null){
            titleRef.current.scrollIntoView();
        }
    },[messages,checkOpened,currentIndex,currTab])

    return (<>
    <Button ref={btnRef} onClick={async ()=>{await onOpen();setCheckOpened(!checkOpened)}} variant='outline' colorScheme='green' size='sm' marginRight='4px' ><BsStars/>AI</Button>
                <Drawer bg='#0f0a19'
                    isOpen={isOpen}
                    placement='left'
                    onClose={()=>{onClose();setCheckOpened(!checkOpened)}}
                    finalFocusRef={btnRef} size="md" >
                        <DrawerOverlay/>
                    <DrawerContent bg='#0f0a19' color='white'>
                    <DrawerCloseButton mt='1'/>
                    <DrawerHeader display='flex' flexDirection='row' alignItems='center' justifyContent='left'><Text>Ask Your Chap</Text><InfoButton/></DrawerHeader>
                    <DrawerBody sx={{height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', }}>
                        {currTab==="chat"?(<ChatTab currentIndex={currentIndex} setTextBoxValue={setTextBoxValue} messages={messages} language={language} lastRef={lastRef}/>):(<CodeAndInputBox titleRef={titleRef} currentIndex={currentIndex} codeArr={codeArr} currTab={currTab} onClose={onClose} toast={toast} inputArr={inputArr} setInput={setInput} handleLanguageChange={handleLanguageChange} value={value} language={language}/>)}
                        <TabSwitchBottomButtom currTab={currTab} setCurrTab={setCurrTab} currentIndex={currentIndex} handleClearChat={handleClearChat} setCurrentIndex={setCurrentIndex} messages={messages}/>
                    </DrawerBody>

                    <DrawerFooter size='sm' >
                        {/* Text area and ask button */}
                        <Box width="100%" 
                            height="100%" 
                            display="flex"
                            flexDirection="row"
                            >
                        <Textarea
                            isDisabled={isLoading}
                            flex='1'
                            resize="none"
                            placeholder="Give input here...."
                            size="sm"
                            marginBottom='2'
                            overflow='auto'
                            value={textBoxValue}
                            onChange={(e)=>setTextBoxValue(e.target.value)}
                            onKeyDown={(e)=>{if(e.key==='Enter'&&textBoxValue.trim().length!==0&&!isLoading&&!e.shiftKey){e.preventDefault();onAsk(); setTextBoxValue("");}}}
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
                            }}/>
                        <Button variant='outline' color='white' _hover={{ bg: 'white', color: 'black' }} size='sm' height='92%' marginLeft='1' onClick={()=>{if(textBoxValue.trim().length!==0&&!isLoading)onAsk();setTextBoxValue("");}} onKeyDown={(e)=>{if(e.key==='Enter'){onAsk();}}} isLoading={isLoading}>Ask</Button>
                        </Box>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
    </>)
}