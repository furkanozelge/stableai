import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { FiHome,FiSearch, FiActivity, FiUser, FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function LoggedInNavbar() {
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
          <img src="/logo.png" alt="Logo" width={130} height={130} onClick={() => router.push('/feed')} style={{ cursor: 'pointer' }} />
        </Box>
        <Flex align="center">
          <Button
            onClick={() => handleButtonClick('/explore')}
            mr={2}
            color="#000000"
            bg="#b28afd"
            size="md"
            leftIcon={<FiSearch />}
          >
            Explore
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
      </Flex>
    </Box>
  );
}

export default LoggedInNavbar;
