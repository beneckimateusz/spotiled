import {
  Box,
  Button,
  Center,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Track } from '../../types';

const PlayerModal: React.FC<{ track: Track }> = ({ track }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width="30px">
      <Center>
        <Button size="xs" onClick={onOpen}>
          <Icon as={FaRegPlayCircle} />
        </Button>
      </Center>

      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Play preview/full song</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Center>
              <iframe
                src={`https://open.spotify.com/embed/track/${track.id}`}
                width="300"
                height="380"
                frameBorder="0"
                allow="encrypted-media"
              ></iframe>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PlayerModal;
