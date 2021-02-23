import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Flex
      bg="green.500"
      color="white"
      boxShadow="md"
      px={5}
      py={3}
      mb={8}
      alignItems="center"
    >
      <Box>
        <Link as={RouterLink} to="/" _hover={undefined}>
          <Heading size="md">spotiled</Heading>
        </Link>
      </Box>
      <Spacer />
      <Box>d-_-b</Box>
    </Flex>
  );
};

export default Header;
