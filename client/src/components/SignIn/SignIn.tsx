import { Button, Center, Link } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { spotifyLoginUrlProd, spotifyLoginUrlDev } from '../../lib/consts';

const SignIn: React.FC = () => {
  const loginUrl =
    process.env.NODE_ENV === 'production'
      ? spotifyLoginUrlProd
      : spotifyLoginUrlDev;

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
