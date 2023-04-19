import React from 'react'
import Navbar from "../../components/Navbar"
import { useRouter } from 'next/router'
import { ButtonGroup,Button,Box } from '@chakra-ui/react'
function index() {
  const router = useRouter();
  return (
    <>
    <Navbar />
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
    <ButtonGroup>
    <Button onClick={() =>{router.push("/text2img")}}>Text to Image</Button>
    <Button onClick={() =>{router.push("/img2img")}}>Image to Image</Button>
    <Button onClick={() =>{router.push("/style-transfer")}}>Style Transfer</Button>
    </ButtonGroup>
    </Box>
    </>
  )
}

export default index