import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { FiPlayCircle } from 'react-icons/fi';
import { useRouter } from 'next/router';

function LoggedOutNavbar() {
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <Box>
      <Flex align="center" bg="black" justifyContent="space-between">
        <Box ml={5}>
          <img src="/logo.png" alt="Logo" width={130} height={130} onClick={() => router.push('/')} style={{ cursor: 'pointer' }} />
        </Box>
        <Button
          onClick={() => handleButtonClick('/sign-in')}
          mr={5}
          color="#000000"
          bg="#b28afd"
          size="md"
          leftIcon={<FiPlayCircle />}
        >
          Start Now
        </Button>
      </Flex>
    </Box>
  );
}

export default LoggedOutNavbar;
