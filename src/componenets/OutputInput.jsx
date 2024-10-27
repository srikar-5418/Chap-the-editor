import { Box} from "@chakra-ui/react";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import SignInBar from "./signInBar";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import "./Splitter.css";

export default function OutputInput({output, setInput, error}) {
  return (
    <Box 
      display="flex"
      flexDirection="column"
      height="98%" 
      width="100%" 
      gap={3}
      pt={2.5}
      ml='1'
      mr='0.5'
    > 
      <Box flexShrink={0}>
        <SignInBar/>
      </Box>
      <Box 
        flex={1}
        width="100%" 
        p="10px" 
        border="1px" 
        borderRadius="10"
        overflow="hidden"
      >
        <Splitter 
          style={{ 
            height: '100%',
            width: '100%',
            border: 'none'
          }} 
          layout="vertical"
          className="custom-splitter "
        >
          <SplitterPanel 
            className="flex align-items-center justify-content-center" 
            size={40} 
            minSize={27}
            style={{ 
              overflow: 'hidden',
            }}
          >
            <InputBox setInput={setInput}/>
          </SplitterPanel>
          <SplitterPanel 
            className="flex align-items-center justify-content-center"  
            size={60} 
            minSize={30}
            style={{ 
              overflow: 'hidden',
            }}
          >
            <OutputBox output={output} error={error}/>
          </SplitterPanel>
        </Splitter>
      </Box>
    </Box>
  )
}