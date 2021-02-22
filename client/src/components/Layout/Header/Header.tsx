import { Box, Text, Flex, Heading, Spacer } from '@chakra-ui/react';
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
        <Heading size="md">spotiled</Heading>
      </Box>
      <Spacer />
      {currentUser && (
        <Box>
          <Text fontSize="md">Logged in as {currentUser.display_name}</Text>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
