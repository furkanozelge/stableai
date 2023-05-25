import React from "react";
import Navbar from "../../components/Navbar";
import { MdDownload } from "react-icons/md";
import {
  Flex,
  Input,
  Text,
  Box,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
function index() {
  const downloadImage = () =>{
    
  }
  const isGenerated = true;
  return (
    <>
      <Navbar />

      {isGenerated ? (
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign={"center"}
          bgGradient="linear(to bottom, rgba(139, 0, 255, 0.7), rgba(199, 21, 133, 0.7))"
        >
          <Box
            m={20}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading>Here is your dream art!</Heading>


            <Text>You can download your art!</Text>
            <MdDownload onClick={downloadImage} size={50}></MdDownload>
          </Box>
        </Flex>
      ) : (
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign={"center"}
          bgGradient="linear(to bottom, rgba(139, 0, 255, 0.7), rgba(199, 21, 133, 0.7))"
        >
          <Box
            m={20}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading mb={10}>
              You are free to push the limits of your mind!
            </Heading>
            <Text as={"b"}>
              Stable Diffusion's text-to-image capabilities allow you to
              transform plain text into stunning, high-quality visuals.
            </Text>
            <Text color={"white"} mt={5} as={"i"}>
              Let's Try Now!
            </Text>
            <Input
              textColor={"white"}
              bgColor={"blackAlpha.500"}
              mt={5}
              width={600}
              placeholder="Your dream in here!"
            ></Input>
            <Button size={"lg"} color="#FFFFFF" bg="#000000" mt={5}>
              Get Your Dream!
            </Button>
          </Box>
        </Flex>
      )}

      <Footer></Footer>
    </>
  );
}

export default index;
