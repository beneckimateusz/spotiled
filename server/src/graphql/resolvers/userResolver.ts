import { ApolloError } from 'apollo-server-express';
import fetch from 'node-fetch';
import { Ctx, Query, Resolver } from 'type-graphql';
import { spotifyApiUrl } from '../../consts';
import { ApolloContext, SpotifyRegularError } from '../../types';
import { isRegularError } from '../../utils/guards';
import { spotifyGetOpts } from '../../utils/utils';
import CurrentUserProfile from '../schemas/user/CurrentUserProfile';

@Resolver()
class UserResolver {
  @Query((_returns) => CurrentUserProfile)
  async currentUserProfile(
    @Ctx() ctx: ApolloContext
  ): Promise<CurrentUserProfile> {
    const response = await fetch(
      `${spotifyApiUrl}/me`,
      spotifyGetOpts(ctx.user.accessToken)
    );

    const data:
      | CurrentUserProfile
      | SpotifyRegularError = await response.json();

    if (isRegularError(data)) {
      throw new ApolloError(data.message, data.status.toString());
    }

    return data;
  }
}

export default UserResolver;
