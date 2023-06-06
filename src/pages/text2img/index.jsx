import {
  ChakraProvider,
  Heading,
  Container,
  Text,
  Input,
  SliderProps,
  SliderThumb,
  Slider,
  SliderMark,
  SliderTrack,
  Spinner,
  SliderFilledTrack,
  Tooltip,
  Button,
  Box,
  Wrap,
  Stack,
  Flex,
  Image,
  Link,
  SkeletonCircle,
  SkeletonText,
  ScaleFade,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import { getProfile } from '../../../utils/api';
import { MdBookmark } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import router from "next/router";
import Cookies from "js-cookie";
import {GENERATE_API,JWT_API} from "../../../utils/apiLinks"
import Footer from "../../components/Footer";

const App = () => {
  const images = [
    "https://jina-ai-gmbh.ghost.io/content/images/2023/04/rainbow.png",
    "https://news.artnet.com/app/news-upload/2022/12/000002025.png",
    "https://murasan-net.com/wp-content/uploads/2022/11/89404af7-0a59-463a-b729-ef64d495cf7da.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7-1024x1024.jpg",
    "https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max",
    "https://i.pcmag.com/imagery/articles/03a3gbCKfH8dDJnjhHLuHDf-1..v1665523315.png",
  ];
  const images2 = [
    "https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/1669252301642-3VO8GC81VMRDDVMATA5I/697c70e5ffe354b9ab6cc9477f91eff253379ec54c032403ad6ae3e5.jpeg",
    "https://weirdwonderfulai.art/wp-content/uploads/2022/08/stablediffusion-study.png",
    "https://www.assemblyai.com/blog/content/images/2022/11/image.png",
    "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2022/12/00098-1555620215-two-lions-holding-each-other.png?fit=768%2C512&ssl=1",
    "https://huggingface.co/blog/assets/98_stable_diffusion/stable_diffusion_12_1.png",
    "https://www.macotakara.jp/archives/001/202212/large-7c8826d4086b3c79.jpg",
  ];
  const images3 = [
    "https://cdn.mos.cms.futurecdn.net/xsZxBwtXNd5tdDmXRLj7e5.jpg",
    "https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg",
    "https://petapixel.com/assets/uploads/2023/03/image5-800x422.jpg",
    "https://imgv3.fotor.com/images/share/wonderland-girl-generated-by-Fotor-ai-art-generator.jpg",
    "https://images.nightcafe.studio/jobs/mhwr0WNca23OKFgfsJDF/mhwr0WNca23OKFgfsJDF--2--A32A3_2x.jpg?tr=w-1600,c-at_max",
    "https://media.wired.com/photos/6378127aef69bd3269392c21/3:2/w_2025,h_1350,c_limit/business-ai-code-art-copyright-113493446.jpg",
  ];
  const images4 = [
    "https://the-decoder.com/wp-content/uploads/2023/02/Openjourney-Stable-Diffusion-comparison.png",
    "https://miro.medium.com/v2/resize:fit:768/1*uuEbSnjmJ1LOuoWDa-nolA.jpeg",
    "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/11/pixabay-stable-diffusion-elves-gf3c96ed37_1920.jpg?fit=1920%2C1280&ssl=1",
    "https://mpost.io/wp-content/uploads/image-68-16.jpg",
    "https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blte9a23994ddbe04b9/63a0c76293149910c1926185/Untitled_design_-_2022-12-19T141934.742.png",
    "https://pbs.twimg.com/media/FasS6uEUEAEGA7r.jpg:large",
  ];
  const images5 = [
    "https://creativecommons.org/wp-content/uploads/2022/10/AIInputsAndOutputs.jpg",
    "https://images.immediate.co.uk/production/volatile/sites/4/2023/02/Midjourney-small-f3a9034.jpg?quality=90&resize=940,400",
    "https://openaimaster.com/wp-content/uploads/2023/03/AI-Like-Midjourney-But-Free.jpg",
    "https://mpost.io/wp-content/uploads/image-74-7-1024x1024.jpg",
    "https://i.pcmag.com/imagery/articles/009eKY0vyQqiSfEUCJhq225-1..v1666985690.png",
    "https://petapixel.com/assets/uploads/2023/03/image5-800x422.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const [profile, setProfile] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [image, updateImage] = useState();
  const [prompt, updatePrompt] = useState();
  const [loading, updateLoading] = useState();
  const token = Cookies.get("access_token");
  const [sliderValue, setSliderValue] = useState(8.5);
  const [showTooltip, setShowTooltip] = useState(false);
  const generate = async (prompt) => {
    updateLoading(true);
    const result = await axios.get(
      `${GENERATE_API}/?prompt=${prompt}&scale=${sliderValue}`,
      { headers: { "ngrok-skip-browser-warning": "69420" } }
    );
    updateImage(result.data);
    updateLoading(false);
  };
  

  const handleBookmark = async () => {
    updateLoading(true);
    try {
      const postData = {
        mail: profile.email,
        prompt: prompt,
        image: image,
      };
      const response = await axios.post(`${JWT_API}/share`, postData,{ headers: { "ngrok-skip-browser-warning": "69420" } });
      console.log(response)
    } catch (error) {
      console.error('İstek gönderilirken bir hata oluştu:', error);
    }
    updateLoading(false);
  };
  useEffect(() => {
    if (!token) {
      router.push('/sign-in');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await getProfile(token);
        setProfile(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [token, router]);

  if (!profile) {
    return (
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Flex flex={1} justify="center" align="center">
          <Spinner size="xl" color="purple.500" />
        </Flex>
        <Footer />
      </Flex>
    );
  }
  
  
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      
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
            bgColor={"blackAlpha.500"}
            as="i"
            bgClip="text"
            fontSize="2xl"
            mb={"0.5em"}
            fontWeight="extrabold"
          >
           Welcome {profile.email}!
          </Text>
          <Text
            bgGradient="linear(to right, #D3DDE3, #E9E9F0)"
            bgClip="text"
            fontSize="6xl"
            mb={"0.5em"}
            fontWeight="extrabold"
          >
            Text to Image
          </Text>

          <Box
            width="100%"
            height="25vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              className="imageof"
              borderRadius={"25px"}
              width="280px"
              height="180px"
              src={images[currentImageIndex]}
              alt=""
              layout="responsive"
            />
            <Image
              className="imageof"
              borderRadius={"25px"}
              width="290px"
              height="190px"
              src={images2[currentImageIndex]}
              alt=""
              layout="responsive"
            />
            <Image
              className="imageof"
              borderRadius={"25px"}
              width="300px"
              height="200px"
              src={images3[currentImageIndex]}
              alt=""
              layout="responsive"
            />
            <Image
              className="imageof"
              borderRadius={"25px"}
              width="290px"
              height="190px"
              src={images4[currentImageIndex]}
              alt=""
              layout="responsive"
            />
            <Image
              className="imageof"
              borderRadius={"25px"}
              width="290px"
              height="180px"
              src={images5[currentImageIndex]}
              alt=""
              layout="responsive"
            />
          </Box>
          <Flex>
          <Text fontSize="2xl" textColor={"whiteAlpha.700"} marginBottom={"10px"}>
            In this magical page, your dreams come true! Every thought sprouting
            from your inner world turns into a visual spectacle here. In this
            place, limited only by your imagination, you will discover how far
            you can wander in an infinite universe.{" "}
          </Text>
          </Flex>
          <Text
            bgGradient="linear(to top, #800b80, #7303c0)"
            bgClip="text"
            fontSize="4xl"
            mb={"0.5em"}
            fontWeight="extrabold"
          >
            {sliderValue}
          </Text>
          <Flex w={500} marginBottom={50}>
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
          </Flex>

          <Wrap marginBottom={"30px"}>
            <Input
              value={prompt}
              onChange={(e) => updatePrompt(e.target.value)}
              width={"350px"}
            ></Input>

            <Button
              onClick={(e) => generate(prompt)}
              colorScheme={"blackAlpha"}
            >
              Generate
            </Button>
          </Wrap>

          {loading ? (
            <Stack mt={6}>
              <Text fontSize={"xl"} color={"black"}>
                Loading...
              </Text>
              <SkeletonCircle />
              <SkeletonText />
            </Stack>
          ) : image ? (
            <>
              <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
              <Text>You can bookmark your art!</Text>
              <MdBookmark size={100} onClick={handleBookmark}></MdBookmark>
              
            </>
          ) : null}
        </Box>
      </Flex>
      <Footer></Footer>
    </ChakraProvider>
  );
};

export default App;
