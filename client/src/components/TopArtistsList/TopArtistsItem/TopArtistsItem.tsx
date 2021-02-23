import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { getImageUrl } from '../../../lib/utils';
import { Artist } from '../../../types';

const TopArtistsItem: React.FC<{ position: number; artist: Artist }> = ({
  position,
  artist,
}) => {
  return (
    <Box>
      <HStack spacing={3}>
        <Center width="40px">
          <Tag>{position}</Tag>
        </Center>
        <Link
          href={artist.external_urls.spotify}
          target="_blank"
          _hover={undefined}
        >
          <Avatar name={artist.name} src={getImageUrl(artist.images)} />
        </Link>
        <Box overflow="hidden">
          <Link
            href={artist.external_urls.spotify}
            target="_blank"
            _hover={undefined}
          >
            <Heading size="sm">{artist.name}</Heading>
          </Link>
          <Text color="gray.500" fontSize="sm">
            {artist.genres.slice(0, 2).join(', ')}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default TopArtistsItem;
