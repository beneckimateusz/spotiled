import { gql, useQuery } from '@apollo/client';
import { Container, Divider, Select, Stack } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
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

  const { error, loading, data } = useQuery<CurrentUserTopTracksData>(
    CURRENT_USER_TOP_TRACKS,
    { variables: { timeRange } }
  );

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorAlert />;

  return (
    <Container>
      <Stack spacing={5}>
        <Select value={timeRange} onChange={handleTimeRangeChange}>
          <option value={TimeRange.SHORT_TERM}>Last 4 weeks</option>
          <option value={TimeRange.MEDIUM_TERM}>Last 6 months</option>
          <option value={TimeRange.LONG_TERM}>Several years</option>
        </Select>
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
