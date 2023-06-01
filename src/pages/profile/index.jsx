import React from 'react'
import Image from 'next/image'
import { Text, Flex, ButtonGroup,Button } from '@chakra-ui/react'
import Navbar from "../../components/Navbar"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProfile } from '../../../utils/api';
import Cookies from 'js-cookie';
function index() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  const token = Cookies.get('access_token');


  useEffect(() => {
    if (!token) {
      router.push('/login');
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

  return (
    <>
    <Navbar></Navbar>
    <Flex>
    <Image
        src="/logo.png" 
        alt="Logo" 
        width={150}
        height={150}
      /> 
    <Text>{profile.email}</Text>
    <ButtonGroup>
      <Button>My Arts</Button>
      <Button>Bookmarks</Button>
    </ButtonGroup>
    </Flex>
    </>
  )
}

export default index