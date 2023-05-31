import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  Flex,
  Box,
  Heading,
  Wrap,
  SliderThumb,
  Input,
  SliderTrack,
  Slider,
  SliderMark,
  SliderFilledTrack,
  Tooltip,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [example, setExample] = useState("");
  const [sliderValue, setSliderValue] = useState(8.5);
  const [showTooltip, setShowTooltip] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (imageNumber) => {
    if (example === imageNumber) {
      setExample(0);
    } else {
      setExample(imageNumber);
    }
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!selectedImage) return;

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result.split(",")[1];
      const base64Data2 = reader.result.split(",")[1];

      try {
        const url = "https://1cc3-107-167-180-18.ngrok-free.app/image2image";
        const headers = {
          "content-type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        };
        console.log("base", base64Data);

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
          <Wrap marginTop={"30px"} marginBottom={"10px"}>
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
                    onChange={handleImageSelect}
                  />
                </>
              )}
              {example !== 0 && (
                <>
                  <Text
                    mt={"0.5em"}
                    bgGradient="linear(to right, black, rgba(255, 55, 133, 0.7))"
                    bgClip="text"
                    fontSize="2xl"
                    mb={"0.5em"}
                    fontWeight="extrabold"
                  >
                    Please upload photo or select one example!
                  </Text>
                  <Input
                    mt={"1em"}
                    alignContent={"center"}
                    display={"flex"}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                  />
                </>
              )}
              <Button mt={"2em"} colorScheme={"blackAlpha"} type="submit">
                Upload Image
              </Button>
            </form>
          </Wrap>
        </Box>
      </Flex>

      <Footer />
    </div>
  );
};

export default ImageUploader;
