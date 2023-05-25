import React from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, ButtonGroup, Button, Box, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
function index() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Flex bgGradient="linear(to bottom, rgba(139, 0, 255, 0.7), rgba(199, 21, 133, 0.7))">
        <Box
          m={50}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text marginLeft={"96"} marginRight={"96"} as={"b"} align={"center"}>
            Terms and Conditions Welcome to the Stable Diffusion Project's
            website! These terms and conditions outline the rules and
            regulations for using our website. By accessing this website, you
            accept these terms and conditions in full. If you disagree with any
            part of these terms and conditions, please do not use our website.
            <br></br><br></br>
            1. Intellectual Property 
            <br></br><br></br>
            1.1. The content on this website, including
            but not limited to text, graphics, images, logos, and software, is
            the property of the Stable Diffusion Project or its licensors and is
            protected by applicable copyright, trademark, and other intellectual
            property laws. 
            <br></br><br></br>
            1.2. You may not modify, copy, reproduce, republish,
            upload, post, transmit, or distribute any portion of the website's
            content without prior written consent from the Stable Diffusion
            Project. 
            <br></br><br></br>
            2. Website Use <br></br><br></br>2.1. You must be at least 18 years old to
            use this website. By accessing this website, you warrant that you
            are at least 18 years old. <br></br><br></br>2.2. You agree to use this website only
            for lawful purposes and in a manner that does not infringe upon the
            rights of others or restrict or inhibit their use and enjoyment of
            the website.<br></br><br></br> 2.3. You are responsible for maintaining the
            confidentiality of any login credentials or account information
            associated with your use of this website.<br></br><br></br> 2.4. The Stable Diffusion
            Project reserves the right to restrict access to certain areas of
            the website or the entire website at its discretion. Access may be
            limited to registered users or the general public.<br></br><br></br> 2.5. The Stable
            Diffusion Project may provide links to third-party websites for your
            convenience. However, we do not endorse, guarantee, or have control
            over the content, products, or services provided by these
            third-party websites. You access them at your own risk.<br></br><br></br> 3.
            Disclaimer <br></br><br></br>3.1. The information provided on this website is for
            general informational purposes only. The Stable Diffusion Project
            makes no representations or warranties, express or implied,
            regarding the accuracy, reliability, completeness, or suitability of
            the information.<br></br><br></br> 3.2. The Stable Diffusion Project shall not be
            liable for any direct, indirect, incidental, consequential, or
            punitive damages arising out of your use or inability to use the
            website or the information provided on it.<br></br><br></br> 3.3. The Stable Diffusion
            Project does not guarantee the availability, continuity, or security
            of the website. We reserve the right to modify, suspend, or
            terminate the website or any part of it at any time without prior
            notice. <br></br><br></br>4. Privacy <br></br><br></br>4.1. The Stable Diffusion Project is committed to
            protecting your privacy. Please refer to our Privacy Policy for
            information on how we collect, use, and disclose personal
            information.<br></br><br></br> 5. Governing Law and Jurisdiction<br></br><br></br> 5.1. These terms and
            conditions shall be governed by and construed in accordance with the
            laws of [Jurisdiction]. Any disputes arising out of or in connection
            with these terms and conditions shall be subject to the exclusive
            jurisdiction of the courts of [Jurisdiction].<br></br><br></br> 6. Modifications<br></br><br></br> 6.1.
            The Stable Diffusion Project reserves the right to revise these
            terms and conditions at any time without prior notice. By continuing
            to use the website after any modifications, you agree to be bound by
            the revised terms and conditions. By using this website, you signify
            your acceptance of these terms and conditions. If you do not agree
            to these terms and conditions, please refrain from using our
            website.
          </Text>
        </Box>
      </Flex>
      <Footer></Footer>
    </>
  );
}

export default index;
