import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from '../../apollo';
import { UserProvider } from '../../context/User';
import Navigation from '../Navigation/Navigation';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <ChakraProvider>
          <Router>
            <Navigation />
          </Router>
        </ChakraProvider>
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
