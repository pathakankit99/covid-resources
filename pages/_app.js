import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {ChakraProvider} from '@chakra-ui/react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

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
    <GoogleReCaptchaProvider
    reCaptchaKey="6LeevLIaAAAAALbuvQrNl2pv7A5LMxqUN0IEhx7Y"
    language="english"
    scriptProps={{
      async: false, // optional, default to false,
      defer: false, // optional, default to false
      appendTo: "head", // optional, default to "head", can be "head" or "body",
      nonce: undefined, // optional, default undefined
    }}
  >
    
    <ChakraProvider theme={theme}>      
        <Component {...pageProps} />
      </ChakraProvider>
  </GoogleReCaptchaProvider>
  )
}