import {Box, } from '@chakra-ui/react'
import  { useRef, useState} from 'react';
import { Editor } from '@monaco-editor/react'
import LanguageSelector from './languageSelector';
import { CODE_SNIPPETS } from '../languageInfo';
import Run from './run';
import { db } from '../assets/firebase';
import { doc,getDoc } from 'firebase/firestore';

export default function CodeEditor({setOutput,input,setError}){
    const editorRef = useRef(null);
    var statusNode = useRef(null);
    const [value,setValue]=useState('');
    const [language,setLanguage]=useState("java")
    const [fntSize,setFntsize]=useState("16px  ")
    const [tbSize,setTbsize]=useState("2 spaces");
    const [isVimEnabled, setIsVimEnabled] = useState(false);
    const [wordWrap,setWordWrap]=useState('off')
    const [isWordWrap,setIsWordWrap]=useState(false);
    const [loadedCode,setLoadedCode]=useState(null);
    const vimModeRef = useRef(null);
    function toggleWordWrap(){
      if(isWordWrap){
        setIsWordWrap(false);
        setWordWrap('off');
      }
      else{
        setIsWordWrap(true);
        setWordWrap('on');
      }
    }
    function handleFontChange(fntSize){
        setFntsize(fntSize);
    }
    function handleTabSizeChange(tbSize){
        setTbsize(tbSize);
    }
    function handleEditorDidMount(editor) {
      editorRef.current = editor;
      if(isVimEnabled){

        window.require.config({
          paths: {
            'monaco-vim': 'https://unpkg.com/monaco-vim/dist/monaco-vim',
          }
        });
        window.require(["monaco-vim"], function (MonacoVim) {
          statusNode.current=document.getElementById('status-code')
          vimModeRef.current=MonacoVim.initVimMode(editorRef.current, statusNode.current);
        });
      }
    }
  function toggleVimMode() {
    if (isVimEnabled) {
      vimModeRef.current && vimModeRef.current.dispose()&&statusNode.current.dispose();
      
    } else {
      statusNode.current=document.getElementById('status-code')
        window.require.config({
        paths: {
          'monaco-vim': 'https://unpkg.com/monaco-vim/dist/monaco-vim',
        }
      });
      window.require(["monaco-vim"], function (MonacoVim) {
        vimModeRef.current=MonacoVim.initVimMode(editorRef.current, statusNode.current);
      });
      }
    setIsVimEnabled(!isVimEnabled); 
  }
 async function handleLanguageChange(languageSent,reset,value=null){
    if(value===null){
      if(reset==="reset"){
        setLoadedCode(null)
        setLanguage(languageSent)
        setValue(CODE_SNIPPETS[languageSent])
      }
      else if(languageSent!==language){
        setLoadedCode(null)
        setLanguage(languageSent)
        setValue(CODE_SNIPPETS[languageSent])
      }
    }
    else{
      const docSnap=await getDoc(doc(db,"code",value));
      setLanguage(languageSent)
      setValue(docSnap.data().code)
      setLoadedCode(value)
    }
   }
    return (
            <Box w='56vw' p='10px' mt='-5' border='1px' h={'95vh'} minH='500px' minW='200px' borderRadius='10' overflow='auto' >
                   <LanguageSelector language={language} handleLanguageChange={handleLanguageChange} fntSize={fntSize} handleFontChange={handleFontChange} tbSize={tbSize} handleTabSizeChange={handleTabSizeChange} toggleVimMode={toggleVimMode} isVimEnabled={isVimEnabled} isWordWrap={isWordWrap} toggleWordWrap={toggleWordWrap} editorRef={editorRef} loadedCode={loadedCode}/>
                    <Editor height={isVimEnabled?'77.5%':'82%'}  theme='vs-dark' padding='2%' language={language} defaultValue={CODE_SNIPPETS[language]} value={value} onChange={(value)=>setValue(value)}
                        onMount={(editor) => {
                            handleEditorDidMount(editor);
                        }}
                        options={{
                            fontSize: fntSize, // Set font size
                            tabSize: tbSize,
                            wordWrap: wordWrap, // Set tab size
                            minimap: {
                            enabled: false,
                            },
                            automaticLayout: true, // Optional: for auto layout
                        }}
                    />
                    <code id='status-code'></code>
                <Run language={language} editorRef={editorRef} setOutput={setOutput} input={input} setError={setError}/>
            </Box>
 
    )
}