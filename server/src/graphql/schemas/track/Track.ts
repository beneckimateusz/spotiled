import { Field, Int, ObjectType } from 'type-graphql';
import SimplifiedAlbum from '../album/SimplifiedAlbum';
import Artist from '../artist/Artist';
import ITrack from './ITrack';

@ObjectType({ implements: ITrack })
class Track extends ITrack {
  @Field((_type) => SimplifiedAlbum)
  album: SimplifiedAlbum;

  @Field((_type) => [Artist])
  artists: Artist[];

  @Field((_type) => Int)
  popularity: number;
}

export default Track;
