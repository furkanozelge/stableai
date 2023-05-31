import React from 'react'
import Navbar from "../../components/Navbar"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex,ButtonGroup,Button,Box ,Text} from '@chakra-ui/react'
import Footer from '../../components/Footer'
import { css } from '@emotion/react';
import styles from './style.module.css'; 
function index() {
  const router = useRouter();

  return (
    <>
    <Navbar />
    <Flex
    pt={10}
    pb={10}
    className='flex'
    width={"100%"}
    display={"flex"}
    justifyContent={"center"}
    bgGradient="linear(to bottom, rgba(139, 0, 255, 0.7), rgba(199, 21, 133, 0.7))"
  >
  <Box
    m={50}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="row"
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="0 1rem"
    >
      <Image
        src="/text-image.png"
        alt="Logo"
        width={375}
        height={375}
        style={{ cursor: "pointer" }}
        className={styles.image}
        onClick={() => {
          router.push("/text2img");
        }}
      />
      <Text m={10} as="b" textAlign={"center"} fontSize="xl">
        Transform your words into captivating visuals with our Text-to-Image technology.
      </Text>
    </Box>
    <div className={styles.separator} />

    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="0 1rem"
    >
      <Image
        src="/img-img.png"
        alt="Logo"
        width={375}
        style={{ cursor: "pointer" }}
        height={375}
        className={styles.image}
        onClick={() => {
          router.push("/img2img");
        }}
      />
      <Text m={10} as="b" textAlign={"center"} fontSize="xl">
        Experience seamless image transformation with our Image-to-Image technology.
      </Text>
    </Box>
    <div className={styles.separator} />
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="0 1rem"
    >
      <Image
        src="/style-transfer.png"
        alt="Logo"
        width={375}
        height={375}
        className={styles.image}
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push("/style-transfer");
        }}
      />
      <Text m={10} as="b" textAlign={"center"} fontSize="xl">
        Unlock endless creative possibilities with our Style-Transfer technology, where art meets AI.
      </Text>
    </Box>
  </Box>
</Flex>

    <Footer></Footer>
    </>
  )
}

export default index