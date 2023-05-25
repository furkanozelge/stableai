import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import { MdDownload } from "react-icons/md";
import axios from "axios"
import {
  Flex,
  Input,
  Text,
  Box,
  Button,
  Center,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Image from "next/image";
function index() {
  const [text, setText] = useState("");
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const ngrokUrl = 'https://f1d9-34-28-231-128.ngrok-free.app/';
  const [base64code, setBase64code] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://f18b-34-28-231-128.ngrok-free.app/?prompt=${encodeURIComponent(text)}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(dataaaaa,data);
      const base64 = data;
      setBase64code(base64);
      const imageUrl = `data:image/jpeg;base64,${base64}`;
      setImageSrc(imageUrl);
    } catch (error) {
      console.log("errorrrrr", error);
    }
  }
  
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'stableai.jpg';
    link.click();
  }
  const isGenerated = false;
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
            <Image src={imageSrc} alt="art" width={500} height={500} />
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
            <Textarea 
              value={text}
              onChange={handleTextChange}
              textColor={"white"}
              bgColor={"blackAlpha.500"}
              mt={5}
              width={500}
              height={10}
              placeholder="Your dream in here!"
              size="md"
            />
            <Button size={"lg"} color="#FFFFFF" bg="#000000" mt={5} onClick={handleSubmit}>
              Get Your Dream
            </Button>
          </Box>
        </Flex>
      )}

      <Footer></Footer>
    </>
  );
}

export default index;
