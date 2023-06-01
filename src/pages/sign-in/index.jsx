import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from "../../components/Navbar"
import { useRouter } from 'next/router';
import { login } from '../../../utils/api';

const avatars = [
  {
    name: 'Furkan Özelge',
    url: '/furkan.png',
  },
  {
    name: 'Yağız Hikmet Karakuş',
    url: '/yagiz.png',
  },
  {
    name: 'Serdar Hoşver',
    url: '/serdar.png',
  },
  {
    name: 'Arda Atakol',
    url: '/arda.png',
  },
];

export default function JoinOurTeam() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [grant_type,setgrant_type] = useState('');
  const [scope,setScope] = useState('');
  const [client_id,setclient_id] = useState('');
  const [client_secret,setclient_secret] = useState('');
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username,password)
      const credentials = new URLSearchParams();
      credentials.append('grant_type', '');
      credentials.append('username', username); // Kullanıcı adınızı buraya ekleyin
      credentials.append('password', password); // Şifrenizi buraya ekleyin
      credentials.append('scope', '');
      credentials.append('client_id', '');
      credentials.append('client_secret', '');

      const response = await login(credentials);
      const { token } = response;
      Cookies.set('token', token); 
      router.push('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Navbar />
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Log In to StableAI{' '}
            {' '}
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Log In Now
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            Welcome back! Please enter your login credentials to access your account.</Text>
          </Stack>
          
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              
              <Input
                placeholder="Username"
                value={username}
                bg={'gray.100'}
                onChange={(e)=> setUsername(e.target.value)}
                name="username"
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="Password"
                bg={'gray.100'}
                border={0}
                onChange={(e)=> setPassword(e.target.value)}
                name="password"
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Button onClick={handleSubmit} fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                Log In!
              </Button>
            </Stack>
            <Button
              onClick={() => {router.push("/sign-up")}}
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, purple.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, purple.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Join Us!
            </Button>
          </Box>
         
        </Stack>
      </Container>

    </Box>
    </>
  );
}

