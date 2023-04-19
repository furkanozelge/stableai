import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import HomePage from "../components/HomePage"
import Navbar from "../components/Navbar"
import { ButtonGroup } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>  
        <Navbar />
        <HomePage />
    </>
  )
}
