import { Container, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <Container>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Container>
  );
};

export default LoadingSkeleton;
