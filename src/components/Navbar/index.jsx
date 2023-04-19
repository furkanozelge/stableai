import Image from 'next/image'
import React from 'react'
import { Button,Flex } from '@chakra-ui/react'
function index() {
  return (
    <>
    <Flex bg="black">
    <Image
        src="/logo.png" 
        alt="Logo" 
        width={150}
        height={150}
      /> 
      <Button color="#000000" bg= "#b28afd" size="sm">Start Now</Button>
      </Flex>
    </>
  )
}

export default index