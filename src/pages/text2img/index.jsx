import {
  ChakraProvider,
  Heading,
  Container,
  Text,
  Input,
  Button,
  Wrap,
  Stack,
  Image,
  Link,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import Navbar from "../../components/Navbar";
import { MdDownload } from "react-icons/md";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "stableai.jpg";
    link.click();
  };
  const [imageSrc, setImageSrc] = useState("");
  const [image, updateImage] = useState();
  const [prompt, updatePrompt] = useState();
  const [loading, updateLoading] = useState();

  const generate = async (prompt) => {
    updateLoading(true);
    const result = await axios.get(
      `https://c62a-34-126-114-169.ngrok-free.app/?prompt=${prompt}`,
      { headers: { "ngrok-skip-browser-warning": "69420" } }
    );
    updateImage(result.data);
    updateLoading(false);
  };

  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <Container>
        <Heading>Stable DIffusion🚀</Heading>
        <Text marginBottom={"10px"}>
          This react application leverages the model trained by Stability AI and
          Runway ML to generate images using the Stable Diffusion Deep Learning
          model. The model can be found via github here{" "}
          <Link href={"https://github.com/CompVis/stable-diffusion"}>
            Github Repo
          </Link>
        </Text>

        <Wrap marginBottom={"10px"}>
          <Input
            value={prompt}
            onChange={(e) => updatePrompt(e.target.value)}
            width={"350px"}
          ></Input>
          <Button onClick={(e) => generate(prompt)} colorScheme={"yellow"}>
            Generate
          </Button>
        </Wrap>

        {loading ? (
          <Stack>
            <SkeletonCircle />
            <SkeletonText />
          </Stack>
        ) : image ? (
          <>
            <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
            <Text>You can download your art!</Text>
            <MdDownload onClick={downloadImage} size={50}></MdDownload>
          </>
        ) : null}
      </Container>
    </ChakraProvider>
  );
};

export default App;
