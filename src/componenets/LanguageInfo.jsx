import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,Tooltip,
  } from '@chakra-ui/react'
  import { useRef } from 'react'
  import { InfoIcon} from '@chakra-ui/icons'
  import { LANGUAGE_INFO} from '../languageInfo'
export default function LanuageInfo({language})
{
  const spanStyle={
    marginLeft:'20px',
}
  // const onClose=useDisclosure();
  const cancelRef=useRef();
return (
    <>
    {/* <Tooltip hasArrow label="Language Info" closeOnClick={false}> */}
      <span style={spanStyle}>
        <Popover >
          <PopoverTrigger >
            <InfoIcon color="white" cursor="pointer" ref={cancelRef} />
          </PopoverTrigger>
          <PopoverContent color="white" bg="black">
            <PopoverArrow color="white" bg="black" />
            <PopoverCloseButton />
            <PopoverHeader>
              <InfoIcon mr="3" mb="1" color="white" />
              {LANGUAGE_INFO[language].version}
            </PopoverHeader>
            <PopoverBody>{LANGUAGE_INFO[language].description}</PopoverBody>
          </PopoverContent>
        </Popover>
      </span>
    {/* </Tooltip> */}
  </>
)
}