import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Box w="100%" flex={1} p={3} pb={10}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
