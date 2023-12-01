import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import React from "react"
import "./test.css"

function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default App
