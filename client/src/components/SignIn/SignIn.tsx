import { Button, Center, Link } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { loginUrl } from '../../lib/config';

const SignIn: React.FC = () => {
  return (
    <Center h="100%">
      <Link _hover={undefined} href={loginUrl}>
        <Button rightIcon={<FaArrowRight />} colorScheme="green">
          Sign In with Spotify
        </Button>
      </Link>
    </Center>
  );
};

export default SignIn;
