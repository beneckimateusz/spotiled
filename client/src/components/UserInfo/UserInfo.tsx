import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaSpotify, FaUser } from 'react-icons/fa';
import UserContext from '../../context/User';

const UserInfo: React.FC = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return null;
  }

  return (
    <Stack direction={{ base: 'column', sm: 'row' }} spacing={5}>
      <Center>
        <Link
          href={currentUser.external_urls.spotify}
          target="_blank"
          _hover={undefined}
        >
          <Avatar
            size="2xl"
            name={currentUser.display_name}
            src={currentUser.images && currentUser.images[0].url}
          />
        </Link>
      </Center>
      <Center>
        <Stack>
          <Box>
            <Heading size="md">{currentUser.display_name}</Heading>
            <Text color="gray.500">{currentUser.id}</Text>
            <Text>{currentUser.email}</Text>
          </Box>
          <HStack color="gray.600" spacing={5}>
            <Text>
              <Icon as={FaUser} /> {currentUser.followers.total}
            </Text>
            <Text>
              <Icon as={FaSpotify} /> {currentUser.product}
            </Text>
          </HStack>
        </Stack>
      </Center>
    </Stack>
  );
};

export default UserInfo;
