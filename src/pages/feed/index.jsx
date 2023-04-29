import React from 'react'
import Navbar from "../../components/Navbar"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex,ButtonGroup,Button,Box ,Text} from '@chakra-ui/react'
import Footer from '../../components/Footer'
function index() {
  const router = useRouter();
  return (
    <>
    <Navbar />
    <Flex bgGradient="linear(to bottom, rgba(139, 0, 255, 0.7), rgba(199, 21, 133, 0.7))">
      
   <Box m={50} display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
    <Image
        src="/text-image.png" 
        alt="Logo" 
        width={375}
        height={375}
        onClick={() =>{router.push("/text2img")}}
    />
    <Text m={10} as="b" fontSize="3xl">Transform your words into captivating visuals with our Text-to-Image technology.</Text>
    <Image
        src="/img-img.png" 
        alt="Logo" 
        width={375}
        height={375}
        onClick={() =>{router.push("/img2img")}}
    />
   
    <Text m={10} as="b" fontSize="3xl">Experience seamless image transformation with our Image-to-Image technology.</Text>
    <Image
        src="/style-transfer.png" 
        alt="Logo" 
        width={375}
        height={375}
        onClick={() =>{router.push("/style-transfer")}}
    />
  
    <Text m={10} as="b" fontSize="3xl">Unlock endless creative possibilities with our Style-Transfer technology, where art meets AI.</Text>
    </Box>
    </Flex>
    <Footer></Footer>
    </>
  )
}

export default index