import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import Cards from "../Cards";
import { Router, useRouter } from "next/router";

function Index() {
  const router = useRouter();

  return (
    <Flex>
      <Flex bgGradient="linear(to bottom, rgba(139, 0, 255, 0.7), rgba(199, 21, 133, 0.7))">
        <Box
          m={50}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Text color={"whitesmoke"} ml={200} mr={200} as="b" fontFamily={"Inter"} mb={5} fontSize="5xl">
            Welcome to{" "}

              <Text
               fontFamily={"Inter"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                borderBottom={"0.1px solid white"}
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
                display="inline"
              >
                StableAI</Text>
           <span className="blinking-cursor" />
              </Text>
          <Text color={"whiteAlpha.800"} ml={250} mr={250} fontSize="xl">
            Transform your ideas into stunning visual masterpieces with our
            stable diffusion AI project. Our text-to-image and image-to-image
            features make it easy to create captivating visuals, while our
            cutting-edge style-transfer technology adds a unique flair to your
            work. With our user-friendly website, you can easily unleash your
            full creative potential and bring your vision to life. Join us on
            this journey of exploration and discovery, and take your visual
            content to the next level with our game-changing AI solutions.
          </Text>
          <Button
            mt={20}
            mb={5}
            size={"lg"}
            rightIcon={<MdCheckCircle />}
            textColor="purple.500"
            variant="solid"
            onClick={() => {
              router.push("/sign-in");
            }}
          >
            Log In!
          </Button>
          <Button
            size={"lg"}
            rightIcon={<SiGnuprivacyguard />}
            colorScheme="purple"
            textColor={"white"}
            variant="solid"
            onClick={() => {
              router.push("/sign-up");
            }}
          >
            Join Us!
          </Button>
          <Cards />
        </Box>
      </Flex>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          animation: blink 1s infinite;
          width: 2px;
          height: 1em;
          background-color: white;
          margin-left: 0.2em;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </Flex>
  );
}

export default Index;
