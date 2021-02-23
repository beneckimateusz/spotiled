import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box w="100%" p={3} pb={10}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
