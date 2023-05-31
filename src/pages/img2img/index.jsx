import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Wrap,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!selectedImage) return;

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result.split(",")[1];

      try {
        const url = "https://1cc3-107-167-180-18.ngrok-free.app/image2image";
        const headers = {
          "content-type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        };
        console.log("base", base64Data);
        console.log("prompt", prompt);
        const response = await axios.post(
          url,
          {
            image: base64Data,
            prompt: prompt,
          },
          {
            headers: headers,
          }
        );

        if (response.status === 200) {
          const { data } = response.data;
          setUploadedImage(data);
        } else {
          console.error("Image upload failed.");
        }
      } catch (error) {
        console.error("Error occurred while uploading image:", error);
      } finally {
        setIsLoading(false);
      }
    };

    reader.readAsDataURL(selectedImage);
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <Navbar />

      <Flex bgGradient="linear(to bottom, rgba(139, 0, 255, 0.7), rgba(199, 21, 133, 0.7))">
        <Box
          mb={180}
          mt={90}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Text
            bgGradient="linear(to right, black, rgba(255, 55, 133, 0.7))"
            bgClip="text"
            fontSize="6xl"
            mb={"0.5em"}
            fontWeight="extrabold"
          >
            Image to Image
          </Text>

          <Text fontSize="2xl" textColor={"black"} marginBottom={"10px"}>
            In this magical page, your dreams come true! Every thought sprouting
            from your inner world turns into a visual spectacle here. In this
            place, limited only by your imagination, you will discover how far
            you can wander in an infinite universe.{" "}
          </Text>

          <Wrap marginBottom={"10px"}>
            <form onSubmit={handleImageUpload}>
              <Input
                mt={"1em"}
                alignContent={"center"}
                display={"flex"}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
              />
              <Input
                type="text"
                placeholder="Your imagination is here!"
                colorScheme="linear(to right, black, rgba(255, 55, 133, 0.7))"
                textColor={"blackAlpha.400"}
                color={"black"}
                value={prompt}
                _placeholder={{ color: 'black' }}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button mt={"2em"}colorScheme={"blackAlpha"} type="submit">Upload Image</Button>
            </form>

            {isLoading && <div>Loading...</div>}

            {uploadedImage && (
              <div>
                <h2>Uploaded Image:</h2>
                <img
                  src={`data:image/jpeg;base64, ${uploadedImage}`}
                  alt="Uploaded"
                />
              </div>
            )}
          </Wrap>
        </Box>
      </Flex>

      <Footer />
    </div>
  );
};

export default ImageUploader;
