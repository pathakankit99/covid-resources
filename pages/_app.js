import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {ChakraProvider} from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#8a5b0e",
    800: "#c7820e",
    700: "#f59e0b",
  },
}
const theme = extendTheme({ colors })

export default function App ({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>      
        <Component {...pageProps} />
      </ChakraProvider>
  )
}