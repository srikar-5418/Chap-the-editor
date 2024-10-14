import { Button,Box,Flex, useToast} from "@chakra-ui/react";
import { executeCode } from "../assets/api";
import {useState} from 'react';

export default function Run({language,editorRef,setOutput,input}){
  const toast=useToast();
  const [isLoading,setIsLoadIng]=useState(false)
  async function onRun(){
    const sourceCode=editorRef.current.getValue();
    if(!sourceCode) return;
    try{
      setIsLoadIng(true)
      const {run:result} =await executeCode(language,sourceCode,input);
      setOutput(result.output.split("\n"));
    }catch(err){
      console.log(err)
      toast({
        title:"An Error Occured",
        description:err.message || "unable to run the code",
        status:'error',
        duration:6000
      })
    }finally{
     setIsLoadIng(false)
    }
  }
    return (
        <>
        <Box >
        <Flex justifyContent="space-between" alignItems="center">
        <Flex ml="auto"  justifyContent='center' alignItems="center">
          <Button colorScheme="green" mt='2' onClick={onRun} isLoading={isLoading}>Run</Button>
          </Flex>
        </Flex>
        </Box>
        </>
    )
}