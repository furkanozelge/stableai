import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { image1Base64 } from "./base64-1";
import { image2Base64 } from "./base64-2";
import { image3Base64 } from "./base64-3";

import {
  Flex,
  Box,
  Wrap,
  Input,
  Button,
  Text,
  Stack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Image from "next/image";
const ImageUploader = () => {
  const example1 = image1Base64;
  const example2 = image2Base64;
  const example3 = image3Base64;

  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [example, setExample] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (imageNumber) => {
    if (example === imageNumber) {
      setExample(0);
    } else {
      setExample(imageNumber);
    }
  };

  const handleOneImage = async (event) => {
    event.preventDefault();

    if (!selectedImage || example === 0) return;

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result.split(",")[1];

      try {
        const url = "https://35aa-34-87-72-126.ngrok-free.app/style-transfer";
        const headers = {
          "content-type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        };
        console.log(base64Data);
        const response = await axios.post(
          url,
          {
            content_image: base64Data,
            style_image:
              example === 1 ? example1 : example === 2 ? example2 : example3,
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

  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!selectedImage || !selectedImage2) return;

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result.split(",")[1];

      const reader2 = new FileReader();
      reader2.onload = async () => {
        const base64Data2 = reader2.result.split(",")[1];

        try {
          const url = "https://d43e-34-87-72-126.ngrok-free.app/style-transfer";
          const headers = {
            "content-type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          };
          console.log(base64Data);
          const response = await axios.post(
            url,
            {
              content_image: base64Data,
              style_image: base64Data2,
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

      reader2.readAsDataURL(selectedImage2);
    };

    reader.readAsDataURL(selectedImage);
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  const handleImageSelect2 = (event) => {
    const file2 = event.target.files[0];
    setSelectedImage2(file2);
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
            Neural Style Transfer!
          </Text>

          <Text fontSize="2xl" textColor={"black"} marginBottom={"10px"}>
            Blend art and reality seamlessly. Harness the cutting-edge
            technology of neural style transfer to infuse your world with
            breathtaking aesthetics. Watch as your images harmoniously merge
            with the essence of renowned artistic styles, creating captivating
            visual symphonies. Step into a realm where innovation meets
            imagination.{" "}
          </Text>
          <Wrap>
            <Image
              onClick={() => handleClick(1)}
              height={"250"}
              width={"250"}
              src="/example1.jpg"
              style={{
                filter: example === 1 ? "brightness(1.5)" : "none",
                cursor: "pointer",
              }}
            ></Image>
            <Image
              onClick={() => handleClick(2)}
              height={"250"}
              width={"400"}
              src="/example2.jpg"
              style={{
                filter: example === 2 ? "brightness(1.5)" : "none",

                cursor: "pointer",
              }}
            ></Image>
            <Image
              onClick={() => handleClick(3)}
              height={"250"}
              width={"250"}
              src="/example3.jpg"
              style={{
                filter: example === 3 ? "brightness(1.5)" : "none",
                cursor: "pointer",
              }}
            ></Image>
          </Wrap>

          <Wrap marginTop={"30px"} marginBottom={"10px"}>
            <form onSubmit={handleImageUpload}>
              {example === 0 && (
                <>
                  <Input
                    mt={"1em"}
                    alignContent={"center"}
                    display={"flex"}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                  />
                  <Input
                    mt={"1em"}
                    alignContent={"center"}
                    display={"flex"}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect2}
                  />
                  <Button mt={"2em"} colorScheme={"blackAlpha"} type="submit">
                    Upload Image
                  </Button>
                </>
              )}
            </form>
            {example !== 0 && (
              <>
                <form onSubmit={handleOneImage}>
                  <Text
                    mt={"0.5em"}
                    bgGradient="linear(to right, black, rgba(255, 55, 133, 0.7))"
                    bgClip="text"
                    fontSize="2xl"
                    mb={"0.5em"}
                    fontWeight="extrabold"
                  >
                    Please upload only one more photo!
                  </Text>
                  <Input
                    mt={"1em"}
                    alignContent={"center"}
                    display={"flex"}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                  />
                  <Button mt={"2em"} colorScheme={"blackAlpha"} type="submit">
                    Upload Image
                  </Button>
                </form>
              </>
            )}

            {isLoading && (
              <Stack mt={6}>
                <Text fontSize={"xl"} color={"black"}>
                  Loading...
                </Text>
                <SkeletonCircle />
                <SkeletonText />
              </Stack>
            )}
          </Wrap>
          {uploadedImage && (
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Box
                mb={180}
                mt={50}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Text
                  bgGradient="linear(to right, black, rgba(255, 55, 133, 0.7))"
                  bgClip="text"
                  fontSize="2xl"
                  mb={"0.5em"}
                  fontWeight="extrabold"
                >
                  Generated Image
                </Text>
                <img
                  src={`data:image/jpeg;base64, ${uploadedImage}`}
                  alt="Uploaded"
                />
              </Box>
            </Flex>
          )}
        </Box>
      </Flex>

      <Footer />
    </div>
  );
};

export default ImageUploader;
