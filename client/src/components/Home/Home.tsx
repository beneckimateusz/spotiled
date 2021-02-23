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
          <Tile link="/top-artists">Top Artists</Tile>
          <Tile link="/top-tracks">Top Tracks</Tile>
          <Tile link="/whatever">Whatever</Tile>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Home;
