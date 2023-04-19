import Image from 'next/image'
import React from 'react'
import { Button, Flex, Box } from '@chakra-ui/react'

function index() {
  return (
    <Box>
      <Flex align="center" bg="black" justifyContent="space-between">
        <Box ml={5}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={130}
          height={130}
        />
        </Box>
        <Button mr={5} color="#000000" bg="#b28afd" size="sm">
          Start Now
        </Button>
      </Flex>
    </Box>
  )
}

export default index
