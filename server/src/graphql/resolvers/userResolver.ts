import fetch from 'node-fetch';
import { Ctx, Query, Resolver } from 'type-graphql';
import { spotifyApiUrl } from '../../consts';
import { ApolloContext } from '../../types';
import { spotifyGetOpts } from '../../utils/utils';
import CurrentUserProfile from '../schemas/user/CurrentUserProfile';

@Resolver()
class UserResolver {
  private userApiUrl = spotifyApiUrl;

  @Query((_returns) => CurrentUserProfile)
  async getCurrentUserProfile(@Ctx() ctx: ApolloContext) {
    const response = await fetch(
      `${this.userApiUrl}/me`,
      spotifyGetOpts(ctx.user.accessToken)
    );

    return response.json();
  }
}

export default UserResolver;
