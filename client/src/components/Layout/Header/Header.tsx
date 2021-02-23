import { Box, Flex, Heading, Spacer, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import UserContext from '../../../context/User';

const Header: React.FC = () => {
  const { currentUser } = React.useContext(UserContext);

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
      {currentUser && (
        <Button variant="link" color="white">
          sign out
        </Button>
      )}
    </Flex>
  );
};

export default Header;
