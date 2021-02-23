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
import { Artist } from '../../../types';

const TopArtistsItem: React.FC<{ position: number; artist: Artist }> = ({
  position,
  artist,
}) => {
  const getImageUrl = () => {
    if (artist.images) {
      return artist.images.length >= 1
        ? artist.images[1].url
        : artist.images[0].url;
    }

    return undefined;
  };

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
          <Avatar name={artist.name} src={getImageUrl()} />
        </Link>
        <Box>
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
