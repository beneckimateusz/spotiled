import { Heading } from '@chakra-ui/react';
import React from 'react';

const App: React.FC = () => {
  return (
    <Heading as="h1" size="4xl" isTruncated>
      (4xl) Hello from App.tsx
    </Heading>
  );
};

export default App;
