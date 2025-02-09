import {Box,Text,} from "@chakra-ui/react"


import CodeTab from "./CodeTab";
import InputTab from "./InputTab";

// eslint-disable-next-line react/prop-types
export default function CodeAndInputBox({titleRef,currentIndex,codeArr,currTab,onClose,toast,inputArr,setInput,handleLanguageChange,value,language}){
    return (
      <>
        <Box
          overflowY="auto"
          overflowX="hidden"
          height="calc(100vh - 100px)"
          sx={{
            width: "100%",
            "&::-webkit-scrollbar": {
              marginRight: "-20px",
              width: "4px",
              borderRadius: "12px",
              backgroundColor: "#0f0a19",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "gray.700",
              borderRadius: "12px",
            },
          }}
        >
          {/* eslint-disable-next-line react/prop-types */}
          <Box ref={titleRef} height="10%" textAlign="left">
            <Text marginLeft={2} fontSize="lg" as="b">
              {currentIndex !== -1
            //   eslint-disable-next-line react/prop-types
                ? codeArr[Math.floor(currentIndex / 2)].title
                : ""}
            </Text>
          </Box>
          {currTab === "code" ? (
            <CodeTab
              currentIndex={currentIndex}
              codeArr={codeArr}
              handleLanguageChange={handleLanguageChange}
              toast={toast}
              onClose={onClose}
              value={value}
              language={language}
            />
          ) : (
            <InputTab
              currentIndex={currentIndex}
              inputArr={inputArr}
              setInput={setInput}
              onClose={onClose}
              toast={toast}
            />
          )}
        </Box>
      </>
    );
}