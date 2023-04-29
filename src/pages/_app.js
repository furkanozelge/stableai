import { Fragment } from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>StableAI 🤖</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Fragment>
  )
}

export default MyApp
