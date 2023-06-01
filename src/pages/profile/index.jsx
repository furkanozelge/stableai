import React, { useState } from 'react';
import Image from 'next/image';
import { Text, Flex, ButtonGroup, Button, Box, Grid, GridItem } from '@chakra-ui/react';
import { FiImage, FiVideo, FiMusic, FiUser } from 'react-icons/fi';
import Navbar from '../../components/Navbar';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getProfile } from '../../../utils/api';
import Cookies from 'js-cookie';

function ProfilePage() {
  
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('my-arts');
  const router = useRouter();
  const token = Cookies.get('access_token');

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
    return <div>Loading...</div>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <Flex direction="column" align="center" mt={8}>
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          {profile.email}
        </Text>
        <ButtonGroup mt={4}>
          <Button
            colorScheme="purple"
            onClick={() => handleTabClick('my-arts')}
            isActive={activeTab === 'my-arts'}
          >
            My Arts
          </Button>
          <Button
            colorScheme="purple"
            onClick={() => handleTabClick('user-info')}
            isActive={activeTab === 'user-info'}
          >
            User Info
          </Button>
        </ButtonGroup>
        {activeTab === 'my-arts' && (
          <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={8}>
            <GridItem>
              <Box bg="gray.100" p={4} textAlign="center">
                <FiImage size={32} />
                <Text mt={2}>Image 1</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="gray.100" p={4} textAlign="center">
                <FiVideo size={32} />
                <Text mt={2}>Video 1</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="gray.100" p={4} textAlign="center">
                <FiMusic size={32} />
                <Text mt={2}>Music 1</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="gray.100" p={4} textAlign="center">
                <FiImage size={32} />
                <Text mt={2}>Image 2</Text>
              </Box>
            </GridItem>
            {/* Add more items as needed */}
          </Grid>
        )}
        {activeTab === 'user-info' && (
          <Box mt={8}>
            <Text fontSize="xl" fontWeight="bold">
              User Info
            </Text>
            <Text>{profile.email}</Text>
            {/* Add more user information as needed */}
          </Box>
        )}
      </Flex>
    </>
  );
}

export default ProfilePage;
