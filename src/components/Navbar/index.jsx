import Image from 'next/image'
import React from 'react'
import { Button, Flex, Box } from '@chakra-ui/react'
import {useRouter} from "next/router"


function index() {
  const router = useRouter();
  const handleClick = () =>{

    router.push("/sign-in")
  }
  return (
    <Box mb={5}>
      <Flex align="center" bg="black" justifyContent="space-between">
        <Box ml={5}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={130}
          height={130}
        />
        </Box>
        <Button onClick={handleClick} mr={5} color="#000000" bg="#b28afd" size="sm">
          Start Now
        </Button>
      </Flex>
    </Box>
  )
}

export default index
