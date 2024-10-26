import './App.css'
import CodeEditor from './componenets/codeEditor';
import { Box } from '@chakra-ui/react';
import OutputInput from './componenets/OutputInput';
import { useState } from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter';
// import './AppSplitter.css';  // Import the new CSS file
import './componenets/Splitter.css'

function App() {
  const [output, setOutput] = useState('click "Run" to run the code')
  const [input, setInput] = useState('click "Run" to run the code')
  const [error, setError] = useState(false)
  
  return (
    <Box 
      width="100vw" 
      height="100vh" 
      bg='#0f0a19' 
      color='gray.600' 
      overflow="hidden"
    >
      <Splitter 
        style={{
          width: '100%',
          height: '100%',
          background: '#0f0a19'
        }}
        className="main-splitter"
      >
        <SplitterPanel 
          className="flex align-items-center justify-content-center" 
          size={40} 
          minSize={20}
          style={{ overflow: 'hidden' } }
        >
          <OutputInput output={output} setInput={setInput} error={error}/>
        </SplitterPanel>
        <SplitterPanel 
          className="flex align-items-center justify-content-center" 
          size={60} 
          minSize={30}
          style={{ overflow: 'hidden' }}
        >
          <CodeEditor setOutput={setOutput} input={input} setError={setError}/>
        </SplitterPanel>
      </Splitter>
    </Box>
  )
}

export default App;