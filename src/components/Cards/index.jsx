import React, { useState, useEffect } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: 'A Tortoise/Ladybird hybrid.',
      position: 'StableAI',
      image: 'https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2023/04/turtlebug-stablediffusion-ai-image.jpg?q=50&fit=crop&w=750&dpr=1.5',
    },
    {
      id: 2,
      content: 'Gandolf taking a break at the park.',
      position: 'StableAI',
      image: 'https://preview.redd.it/r3og06drad3b1.png?width=960&crop=smart&auto=webp&v=enabled&s=39183d1fb42928a21d65343c9ac87fe8f62169e2',
    },
    {
      id: 3,
      content: 'A digital Illustration of the Babel tower, 4k, detailed, trending in artstation, fantasy vivid colors.',
      position: 'StableAI',
      image: 'https://strikingloo.github.io/resources/ai-generated-images/stable-diffusion/selected/200385555_A_digital_illustration_of_the_Babel_tower__4k__detailed__trending_in_artstation__fantasy_vivid_colors.png',
    },
    {
      id: 4,
      content: '3D Cartoon Model, A girl is laughing with pijamas.',
      position: 'StableAI',
      image: 'https://preview.redd.it/mwzt72g1p73b1.png?width=960&crop=smart&auto=webp&v=enabled&s=a6ffe7bc2360d29013c71f1b3bc9dbddf1342e3a',
    },
    {
      id: 5,
      content: 'A digital illustration of a steampunk flying machine in the sky with cogs and mechanisms.',
      position: 'StableAI',
      image: 'https://strikingloo.github.io/resources/ai-generated-images/stable-diffusion/selected/1113348597__A_digital_illustration_of_a_steampunk_flying_machine_in_the_sky_with_cogs_and_mechanisms__4k__detailed__trending_in_artstation__fantasy_vivid_colors_.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
      {testimonials.map((testimonial, index) => (
        <Box
          key={testimonial.id}
          mx="2"
          cursor="pointer"
          transform={activeIndex === index ? 'scale(1.1)' : 'scale(1)'}
          transition="transform 0.3s"
          onClick={() => handleClick(index)}
          bgGradient="linear(to bottom, #9A2187, #f953c6, purple.400)"
          borderRadius="lg"
          mt={10}
          overflow="hidden"
          textAlign="center"
          color="white"
          p="6"
          w="300px"
          h={activeIndex === index ? '380px' : '320px'}
          _hover={{
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          }}
          display={activeIndex === index}
        >
          <Text mt={1} fontSize="md" fontWeight="bold" mb="7">
            {testimonial.content}
          </Text>
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            borderRadius="full"
            boxSize={activeIndex === index ? '200px' : '180px'}
            mx="auto"
            transform={activeIndex === index ? 'scale(1.1)' : 'scale(1.05)'}
            transition="transform 0.3s"
          />
        </Box>
      ))}
    </Box>
  );
};

export default Testimonials;
