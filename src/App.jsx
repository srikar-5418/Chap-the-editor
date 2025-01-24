import { useState, useEffect } from 'react';
import './App.css'
import CodeEditor from './componenets/codeEditor';
import { Box } from '@chakra-ui/react';
import OutputInput from './componenets/OutputInput';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import './componenets/Splitter.css'

function App() {
  const [output, setOutput] = useState('click "Run" to run the code')
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [isVertical, setIsVertical] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      const vertical = window.innerHeight > window.innerWidth
      setIsVertical(vertical)
    }
    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    return () => window.removeEventListener('resize', checkOrientation)
  }, [])
  if (!isVertical) {
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
          layout="horizontal"
          className="main-splitter"
        >
          <SplitterPanel 
            className="flex align-items-center justify-content-center" 
            size={43} 
            minSize={20}
            style={{ overflow: 'hidden' }}
          >
            <OutputInput output={output} setInput={setInput} error={error} input={input}/>
          </SplitterPanel>
          <SplitterPanel 
            className="flex align-items-center justify-content-center" 
            size={57} 
            minSize={30}
            style={{ overflow: 'hidden' }}
          >
            <CodeEditor setOutput={setOutput} setInput={setInput} input={input} output={output} setError={setError}error={error}/>
          </SplitterPanel>
        </Splitter>
      </Box>
    )
  }

  // Render for vertical (mobile) layout
  return (
    <Box 
      width="100vw" 
      height="100vh" 
      bg='#0f0a19' 
      color='gray.600' 
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <Box 
        width="95%" 
        height="50%" 
        overflow="auto"
      >
        <OutputInput 
          output={output} 
          setInput={setInput} 
          error={error}
        />
      </Box>
      
      <Box 
        width="100%" 
        height="50%" 
        overflow="auto"
      >
        <CodeEditor 
          setOutput={setOutput} 
          input={input} 
          setError={setError}
        />
      </Box>
    </Box>
  )
}

export default App;