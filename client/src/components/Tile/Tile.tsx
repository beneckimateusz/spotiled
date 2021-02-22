import { Center, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Tile: React.FC<{ link: string }> = ({ children, link }) => {
  return (
    <Link as={RouterLink} to={link} _hover={undefined}>
      <Center
        bg="green.500"
        color="white"
        p={4}
        borderRadius="md"
        boxShadow="md"
        minH="160px"
        _hover={{
          bg: 'gray.500',
          transition: 'background-color 0.3s',
        }}
      >
        <Text fontSize="xl">{children}</Text>
      </Center>
    </Link>
  );
};

export default Tile;
