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
  InputGroup,
  InputRightElement,
  IconButton,
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react';
import { signUp } from '../../../utils/api';
import { useRouter } from 'next/router';
import { useState } from 'react';
import UnNavbar from "../../components/UnNavbar"
import { ViewIcon,ViewOffIcon } from '@chakra-ui/icons';

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
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [profilpicture, setProfilpicture] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [formError, setFormError] = useState('');

  const router = useRouter();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setFormError('Please fill in all fields.');
      return;
    }
    if (password.length < 5) {
      setFormError('Password should be at least 5 characters long.');
      return;
    }
    try {
      const userData = { name,surname,username,profilpicture,email, password };
      await signUp(userData);
      router.push("/sign-in")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <UnNavbar />
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
            Join to StableAI{' '}
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
              Join Now
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            Join our community and create an account today to access exclusive content and resources.
            </Text>
          </Stack>

              
              {formError && <Text color="red.500">{formError}</Text>}
         
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="mail@sample.com"
                bg={'gray.100'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <InputGroup>
              <Input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <InputRightElement width="4.5rem">
                    <IconButton
                      h="1.75rem"
                      size="sm"
                      onClick={handleTogglePassword}
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      variant="ghost"
                    />
                  </InputRightElement>
                  </InputGroup>
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              type='submit'
              w={'full'}
              onClick={handleSubmit}
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

