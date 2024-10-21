import './App.css'
import CodeEditor from './componenets/codeEditor';
import { Box, HStack } from '@chakra-ui/react';
import OutputInput from './componenets/OutputInput';
import { useState } from "react";
// import LanguageSelector from './componenets/languageSelector';
function App() {
  const [output,setOutput]=useState('click "Run" to run the code')
  const [input,setInput]=useState('click "Run" to run the code')
  const [error,setError]=useState(false)
  return (
    <Box minH='100vh' bg='#0f0a19' color='gray.600' px={6} py={8}>
      <HStack>
        <OutputInput output={output} setInput={setInput} error={error}/>
        <CodeEditor setOutput={setOutput} input={input} setError={setError}/>
      </HStack>
    </Box>

  )
}

export default App;
