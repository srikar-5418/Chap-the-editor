import './App.css'
import CodeEditor from './componenets/codeEditor';
import { Box, HStack } from '@chakra-ui/react';
import OutputInput from './componenets/OutputInput';
import { useState } from "react";
// import LanguageSelector from './componenets/languageSelector';
function App() {
  const [output,setOutput]=useState('click "Run" to run the code')
  const [input,setInput]=useState('click "Run" to run the code')
  return (
    <Box minH='100vh' bg='#0f0a19' color='gray.600' px={6} py={8}>
      <HStack>
        <OutputInput output={output} setInput={setInput}/>
        <CodeEditor setOutput={setOutput} input={input}/>
      </HStack>
    </Box>

  )
}

export default App;
