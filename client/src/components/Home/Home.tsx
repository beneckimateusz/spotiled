import { Container, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import Tile from '../Tile/Tile';
import UserInfo from '../UserInfo/UserInfo';

const Home: React.FC = () => {
  return (
    <Container maxW="xl">
      <Stack spacing={10}>
        <UserInfo />
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
          <Tile link="/top-artists">top artists</Tile>
          <Tile link="/top-tracks">top tracks</Tile>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Home;
