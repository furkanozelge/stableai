import React from 'react'
import Image from 'next/image'
import { Text, Flex, ButtonGroup,Button } from '@chakra-ui/react'
import Navbar from "../../components/Navbar"
function index() {
  return (
    <>
    <Navbar></Navbar>
    <Flex>
    <Image
        src="/logo.png" 
        alt="Logo" 
        width={150}
        height={150}
      /> 
    <Text>Nickname</Text>
    <ButtonGroup>
      <Button>My Arts</Button>
      <Button>Bookmarks</Button>
    </ButtonGroup>
    </Flex>
    </>
  )
}

export default index