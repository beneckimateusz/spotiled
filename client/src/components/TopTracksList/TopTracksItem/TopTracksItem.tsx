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
import { Artist, Track } from '../../../types';

const TopTracksItem: React.FC<{ position: number; track: Track }> = ({
  position,
  track,
}) => {
  return (
    <Box>
      <HStack spacing={3}>
        <Center width="40px">
          <Tag>{position}</Tag>
        </Center>
        <Link
          href={track.external_urls.spotify}
          target="_blank"
          _hover={undefined}
        >
          <Avatar
            name={track.album.name}
            src={getImageUrl(track.album.images)}
          />
        </Link>
        <Box>
          <Link
            href={track.external_urls.spotify}
            target="_blank"
            _hover={undefined}
          >
            <Heading size="sm">{track.name}</Heading>
          </Link>
          {track.album.album_type !== 'SINGLE' && (
            <Text fontSize="sm">from {track.album.name}</Text>
          )}
          <Text color="gray.500" fontSize="sm">
            {track.artists.map((a: Artist) => a.name).join(', ')}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default TopTracksItem;
