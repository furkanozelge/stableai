import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import HomePage from "../components/HomePage"
import UnNavbar from "../components/UnNavbar"
import Cards from "../components/Cards"
import { ButtonGroup } from '@chakra-ui/react'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>  
        <UnNavbar />
        
        <HomePage />
        <Footer />
    </>
  )
}
