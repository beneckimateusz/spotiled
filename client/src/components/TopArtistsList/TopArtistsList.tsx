import { gql, useQuery } from '@apollo/client';
import { Container, Divider, Select, Stack } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { Artist, TimeRange } from '../../types';
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

  const { error, loading, data } = useQuery<CurrentUserTopArtistsData>(
    CURRENT_USER_TOP_ARTISTS,
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
          {data?.currentUserTopArtists.map((a: Artist, index) => (
            <>
              <TopArtistsItem key={a.id} position={index + 1} artist={a} />
              {index + 1 !== data.currentUserTopArtists.length && <Divider />}
            </>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default TopArtistsList;
