import { Field, Int, ObjectType } from 'type-graphql';
import Artist from '../artist/Artist';
import SimplifiedTrack from '../track/SimplifiedTrack';
import IAlbum from './IAlbum';

@ObjectType({ implements: IAlbum })
class Album extends IAlbum {
  @Field((_type) => [Artist])
  artists: Artist[];

  @Field((_type) => [String])
  genres: string[];

  @Field((_type) => [SimplifiedTrack])
  tracks: SimplifiedTrack[];

  @Field()
  label: string;

  @Field((_type) => Int)
  popularity: number;
}

export default Album;
