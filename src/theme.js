import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config:{
    intialColorMode:"dark",
    userSystemColorMode:false,
  }
})
export default theme;