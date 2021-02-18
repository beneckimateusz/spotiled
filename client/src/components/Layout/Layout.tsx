import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from './Header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box w="100%" p={3}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
