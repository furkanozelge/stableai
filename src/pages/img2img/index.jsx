import React, { useState,useEffect } from "react";
import {
  Flex,
  Stack,
  Box,
  Heading,
  SkeletonCircle,
  Slider,
  SliderMark,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderMarkProps,
  SliderTrack,
  Tooltip,
  SkeletonText,
  Wrap,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import axios from "axios";
import Footer from "../../components/Footer";
import router from "next/router";
import Navbar from "../../components/Navbar";
import Cookies from "js-cookie";

const ImageUploader = () => {
  const token = Cookies.get("access_token");
  useEffect(() => {
    if (!token) {
      router.push("/sign-in");
    }
  }, [token, router]);

  if (!token) {
    return <div>Loading...</div>;
  }
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(8.5);
  const [showTooltip, setShowTooltip] = useState(false);
  const [prompt, setPrompt] = useState("");
  const sliderToFloat = () => {
    const floatValue = parseFloat(sliderValue);
  }
  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!selectedImage) return;

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result.split(",")[1];

      try {
        const url = "https://24d1-34-87-72-126.ngrok-free.app/image2image";
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
            scale: sliderValue
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
            Unlock the power of transformation. Witness as your ordinary images
            transcend into extraordinary masterpieces. With just a click,
            reimagine the possibilities and let your creativity take flight.
            Experience the magic of metamorphosis on our canvas of pixels.{" "}
          </Text>

          <Wrap w={400} marginBottom={"10px"}>
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
                _placeholder={{ color: "black" }}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Text
                mt={"1.5em"}
                bgGradient="linear(to bottom, purple,black)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
              >
                Your guidance scale is :
              </Text>
              <Text
                bgGradient="linear(to bottom, black, rgba(255, 55, 133, 0.7))"
                bgClip="text"
                fontSize="4xl"
                mb={"0.5em"}
                fontWeight="extrabold"
              >
                {sliderValue}
              </Text>
              <Slider
              id="slider"
              step={0.5}
              defaultValue={8.5}
              min={0}
              max={30}
              colorScheme="purple"
              onChange={(v) => setSliderValue(v)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderMark value={1} mt="1" ml="-2.5" fontSize="md">
                1%
              </SliderMark>
              <SliderMark value={15} mt="1" ml="-2.5" fontSize="md">
                15%
              </SliderMark>
              <SliderMark value={30} mt="1" ml="-2.5" fontSize="md">
                30%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="teal.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue}%`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
              <Button mt={"2em"} colorScheme={"blackAlpha"} type="submit">
                Upload Image
              </Button>
            </form>
          </Wrap>
          {isLoading && (
            <Stack mt={6}>
              <Text fontSize={"xl"} color={"black"}>
                Loading...
              </Text>
              <SkeletonCircle />
              <SkeletonText />
            </Stack>
          )}

          {uploadedImage && (
            <Flex>
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
