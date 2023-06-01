import Image from 'next/image';
import React from 'react';
import { Button, Flex, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { FiHome, FiActivity, FiUser, FiLogOut, FiPlayCircle } from 'react-icons/fi';
import Cookies from 'js-cookie';

function Navbar() {
  const router = useRouter();
  const token = Cookies.get('access_token');

  const handleButtonClick = (path) => {
    router.push(path);
  };

  const handleLogout = () => {
    Cookies.remove('access_token');
    router.push('/sign-in');
  };

  return (
    <Box>
      <Flex align="center" bg="black" justifyContent="space-between">
        <Box ml={5}>
          <Image onClick={() => router.push('/')} src="/logo.png" alt="Logo" width={130} height={130} />
        </Box>
        {token ? (
          <>
            <Flex align="center">
              <Button
                onClick={() => handleButtonClick('/')}
                mr={2}
                color="#000000"
                bg="#b28afd"
                size="md"
                leftIcon={<FiHome />}
              >
                Home
              </Button>
              <Button
                onClick={() => handleButtonClick('/feed')}
                mr={2}
                color="#000000"
                bg="#b28afd"
                size="md"
                leftIcon={<FiActivity />}
              >
                Generate
              </Button>
              <Button
                onClick={() => handleButtonClick('/profile')}
                mr={2}
                color="#000000"
                bg="#b28afd"
                size="md"
                leftIcon={<FiUser />}
              >
                Profile
              </Button>
              <Button onClick={handleLogout} mr={2} color="#000000" bg="pink.300" size="md" leftIcon={<FiLogOut />}>
                Log Out
              </Button>
            </Flex>
          </>
        ) : (
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
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
