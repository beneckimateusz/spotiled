import { gql, useQuery } from '@apollo/client';
import {
  Button,
  Container,
  Divider,
  HStack,
  Select,
  Stack,
} from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Artist, TimeRange } from '../../types';
import { FaArrowLeft } from 'react-icons/fa';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import TopArtistsItem from './TopArtistsItem/TopArtistsItem';

const CURRENT_USER_TOP_ARTISTS = gql`
  query CurrentUserTopArists($timeRange: TimeRange) {
    currentUserTopArtists(timeRange: $timeRange) {
      id
      name
      external_urls {
        spotify
      }
      genres
      popularity
      followers {
        total
      }
      images {
        height
        width
        url
      }
    }
  }
`;

interface CurrentUserTopArtistsData {
  currentUserTopArtists: Artist[];
}

const TopArtistsList: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.MEDIUM_TERM);
  const handleTimeRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value as TimeRange);
  };

  const history = useHistory();

  const { error, loading, data } = useQuery<CurrentUserTopArtistsData>(
    CURRENT_USER_TOP_ARTISTS,
    { variables: { timeRange } }
  );

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorAlert />;

  return (
    <Container>
      <Stack spacing={5}>
        <HStack spacing={3}>
          <Button leftIcon={<FaArrowLeft />} onClick={() => history.goBack()}>
            go back
          </Button>
          <Select value={timeRange} onChange={handleTimeRangeChange}>
            <option value={TimeRange.SHORT_TERM}>last 4 weeks</option>
            <option value={TimeRange.MEDIUM_TERM}>last 6 months</option>
            <option value={TimeRange.LONG_TERM}>several years</option>
          </Select>
        </HStack>
        <Stack>
          {data?.currentUserTopArtists.map((a: Artist, index) => (
            <Stack key={a.id}>
              {index > 0 && <Divider />}
              <TopArtistsItem key={a.id} position={index + 1} artist={a} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default TopArtistsList;
