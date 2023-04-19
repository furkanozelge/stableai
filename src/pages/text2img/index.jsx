import React from 'react'
import Navbar from "../../components/Navbar"
import { Input,Text ,Box, Button, Center, Heading} from '@chakra-ui/react'
function index() {
  return (
    <>
    <Navbar />
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
    <Heading>You are free to push the limits of your mind!</Heading>
    <Input
    width={600}
    placeholder='Your dream in here!'
    ></Input>
    <Button color="#000000" bg="#b28afd"  mt={5}>Get Your Dream!</Button>
    </Box>
    </>
  )
}

export default index