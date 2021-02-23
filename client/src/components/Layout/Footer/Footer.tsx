import { Center, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Center p={3}>
      <Text fontSize="sm" color="gray.500">
        Made with ☕ by{' '}
        <Link color="green.500" href="https://mbenecki.com">
          Mateusz Benecki
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
