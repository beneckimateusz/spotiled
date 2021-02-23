import { ApolloError } from 'apollo-server-express';
import fetch from 'node-fetch';
import queryString from 'query-string';
import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { spotifyApiUrl } from '../../consts';
import {
  ApolloContext,
  SpotifyPagingObject,
  SpotifyRegularError,
  TimeRange,
} from '../../types';
import { isRegularError } from '../../utils/guards';
import { maybeRefresh, spotifyGetOpts } from '../../utils/spotifyUtils';
import Artist from '../schemas/artist/Artist';
import Track from '../schemas/track/Track';
import CurrentUserProfile from '../schemas/user/CurrentUserProfile';

@Resolver()
class UserResolver {
  @Query((_returns) => CurrentUserProfile)
  async currentUserProfile(
    @Ctx() ctx: ApolloContext
  ): Promise<CurrentUserProfile> {
    await maybeRefresh(ctx);

    const response = await fetch(
      `${spotifyApiUrl}/me`,
      spotifyGetOpts(ctx.session.accessToken)
    );

    const data:
      | CurrentUserProfile
      | SpotifyRegularError = await response.json();

    if (isRegularError(data)) {
      throw new ApolloError(data.error.message, data.error.status.toString());
    }

    return data;
  }

  @Query((_returns) => [Artist])
  async currentUserTopArtists(
    @Arg('timeRange', (_type) => TimeRange, {
      defaultValue: TimeRange.MEDIUM_TERM,
    })
    timeRange: TimeRange,
    @Ctx() ctx: ApolloContext
  ): Promise<Artist[]> {
    await maybeRefresh(ctx);

    const response = await fetch(
      `${spotifyApiUrl}/me/top/artists?${queryString.stringify({
        time_range: timeRange,
      })}`,
      spotifyGetOpts(ctx.session.accessToken)
    );

    const data:
      | SpotifyPagingObject<Artist>
      | SpotifyRegularError = await response.json();

    if (isRegularError(data)) {
      throw new ApolloError(data.error.message, data.error.status.toString());
    }

    return data.items;
  }

  @Query((_returns) => [Track])
  async currentUserTopTracks(
    @Arg('timeRange', (_type) => TimeRange, {
      defaultValue: TimeRange.MEDIUM_TERM,
    })
    timeRange: TimeRange,
    @Ctx() ctx: ApolloContext
  ): Promise<Track[]> {
    await maybeRefresh(ctx);

    const response = await fetch(
      `${spotifyApiUrl}/me/top/tracks?${queryString.stringify({
        time_range: timeRange,
      })}`,
      spotifyGetOpts(ctx.session.accessToken)
    );

    const data:
      | SpotifyPagingObject<Track>
      | SpotifyRegularError = await response.json();

    if (isRegularError(data)) {
      throw new ApolloError(data.error.message, data.error.status.toString());
    }

    return data.items;
  }
}

export default UserResolver;
