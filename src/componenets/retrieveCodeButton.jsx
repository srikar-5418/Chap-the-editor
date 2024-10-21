

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,Button,useToast,
    Text,
    Flex,
    Tooltip,
    Divider
  } from '@chakra-ui/react'
import { useRef } from 'react'
import { db } from '../assets/firebase'
import { arrayRemove, deleteDoc, doc,getDoc, setDoc } from 'firebase/firestore'
import { auth } from '../assets/firebase'
import { useState } from 'react'
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LANGUAGE_ICONS } from '../languageInfo'

export default function RetrieveCodeButton({handleLanguageChange}){
  const toast=useToast(); 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const [codeArr,setcodeArr]=useState([{id:"",name:""}]);
  let removeElement =async (array, n) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
  async function retrieveCode(){
    try{
        const docSnap=await getDoc(doc(db,"user",auth.currentUser.uid));
        setcodeArr(docSnap.data().code);
    }catch(err){
        toast({
            title:"An Error Occured",
                description:err.message || "unable to load codes",
                status:'error',
                duration:6000
        })
    }
    finally{
        onOpen();
    }
  }
  async function loadCode(codeSent){
   try{
        await handleLanguageChange(codeSent.language,"",codeSent.id);
   }catch(err){
       console.log(err)
    toast({
        title:"An Error Occured",
            description:err.message || "unable to load code for edit",
            status:'error',
            duration:3000
    })
   }
   finally{
    onClose();
   }
  }
  async function deleteCode(codeSent){
    try{
        const codeRef=await doc(db,"code",codeSent.id);
        await deleteDoc(codeRef);
        await setDoc(doc(db,"user",auth.currentUser.uid),{
            code:arrayRemove(codeSent)
        },{merge:true}) 
        setcodeArr(await removeElement(codeArr,codeSent));
    }catch(err){
        // console.log(err)
        toast({
            title:"An Error Occured",
                description:err.message || "unable to delete code",
                status:'error',
                duration:3000
        })
    }
  }
        return (
            <>
            <Button ref={btnRef} onClick={async ()=>await retrieveCode()}>Retrieve Code</Button>
                    <Drawer bg='#0f0a19'
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}>
                        <DrawerOverlay/>
                    <DrawerContent bg='#0f0a19' color='white'>
                    <DrawerCloseButton mt='1'/>
                    <DrawerHeader>Select code to retrieve</DrawerHeader>
                    <Divider color='gray.100' />
                    <DrawerBody overflow='auto'  sx={{'&::-webkit-scrollbar': {width: '16px',borderRadius: '12px',backgroundColor: `gray.700`,},'&::-webkit-scrollbar-thumb': {backgroundColor: `gray.900`,borderRadius:'12px'},}}>
                        {codeArr.length!==0?(codeArr.map((code)=>(
                            <Flex key={code} mt='8' h='10px' alignItems='center'>
                                <img src={LANGUAGE_ICONS[code.language]} alt={code.language} style={{ width: '20px', height: '20px', marginRight: '8px' }}></img>
                                <Text color='white' >{code.name}</Text>
                                <Flex  ml='auto' alignItems='center' >
                                    <Tooltip hasArrow label='Edit'>
                                        <span style={{margin:'5px',}} onClick={async()=>await loadCode(code)}>
                                        <GrEdit size='14'/>
                                        </span>
                                    </Tooltip>
                                    <Tooltip hasArrow label='Delete'>
                                        <span style={{margin:'5px',}} onClick={async()=>await deleteCode(code)}>
                                        <RiDeleteBin6Line color='red' size='18'/>
                                        </span>
                                    </Tooltip>
                                </Flex>
                            </Flex>
                        ))):(<Text>You have no saved codes...</Text>)}
                        
                    </DrawerBody>
                    <DrawerFooter>
                        <Button  colorScheme='red'  mr={3} onClick={onClose}>
                        Close
                        </Button> 
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>
        )
}