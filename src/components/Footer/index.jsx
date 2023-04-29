import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="black"
      color="white"
    >
      <Box>
        <Flex>
          <Image src="/logo.png" width={100} height={100} />
        </Flex>
         </Box>
      <Box>
      <Text fontSize="sm">© 2023 All rights reserved</Text>
    
      </Box>
    </Flex>
  );
};

export default Footer;
