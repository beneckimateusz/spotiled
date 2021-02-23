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
          <Select value={timeRange} onChange={handleTimeRangeChange}>
            <option value={TimeRange.SHORT_TERM}>last 4 weeks</option>
            <option value={TimeRange.MEDIUM_TERM}>last 6 months</option>
            <option value={TimeRange.LONG_TERM}>several years</option>
          </Select>
          <Button onClick={() => history.goBack()}>go back</Button>
        </HStack>
        <Stack>
          {data?.currentUserTopTracks.map((t: Track, index) => (
            <>
              {index > 0 && <Divider />}
              <TopTracksItem key={t.id} track={t} position={index + 1} />
            </>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default TopTracksList;
