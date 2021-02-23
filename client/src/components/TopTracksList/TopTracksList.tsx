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
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { TimeRange, Track } from '../../types';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import TopTracksItem from './TopTracksItem/TopTracksItem';

const CURRENT_USER_TOP_TRACKS = gql`
  query CurrentUserTopTracks($timeRange: TimeRange) {
    currentUserTopTracks(timeRange: $timeRange) {
      id
      name
      artists {
        name
      }
      external_urls {
        spotify
      }
      duration_ms
      preview_url
      album {
        album_type
        name
        external_urls {
          spotify
        }
        release_date
        images {
          width
          height
          url
        }
      }
      popularity
    }
  }
`;

interface CurrentUserTopTracksData {
  currentUserTopTracks: Track[];
}

const TopTracksList: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.MEDIUM_TERM);
  const handleTimeRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value as TimeRange);
  };

  const history = useHistory();

  const { error, loading, data } = useQuery<CurrentUserTopTracksData>(
    CURRENT_USER_TOP_TRACKS,
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
          {data?.currentUserTopTracks.map((t: Track, index) => (
            <Stack key={t.id}>
              {index > 0 && <Divider />}
              <TopTracksItem track={t} position={index + 1} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default TopTracksList;
