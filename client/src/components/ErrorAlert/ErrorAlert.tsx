import React from 'react';
import { Alert, AlertIcon, Container } from '@chakra-ui/react';

const ErrorAlert: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <Container>
      <Alert status="error">
        <AlertIcon />
        {message ? message : 'There was an error processing your request'}
      </Alert>
    </Container>
  );
};

export default ErrorAlert;
