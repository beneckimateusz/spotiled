import { Field, Int, ObjectType } from 'type-graphql';
import Followers from '../common/Followers';
import Image from '../common/Image';
import IArtist from './IArtist';

@ObjectType({ implements: IArtist })
class Artist extends IArtist {
  @Field((_type) => [String])
  genres: string[];

  @Field((_type) => Int)
  popularity: number;

  @Field((_type) => Followers)
  followers: Followers;

  @Field((_type) => [Image])
  images: Image[];
}

export default Artist;
