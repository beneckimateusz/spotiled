/* eslint-disable camelcase */
import { Field, ID, ObjectType } from 'type-graphql';
import ExternalUrls from '../common/ExternalUrls';
import Followers from '../common/Followers';
import Image from '../common/Image';

@ObjectType({ description: "Currently authorized user's profile" })
class CurrentUserProfile {
  @Field((_type) => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  display_name: string;

  @Field()
  product: string;

  @Field((_type) => ExternalUrls)
  external_urls: ExternalUrls;

  @Field((_type) => Followers)
  followers: Followers;

  @Field((_type) => [Image])
  images: Image[];
}

export default CurrentUserProfile;
