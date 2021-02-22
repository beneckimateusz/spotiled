import { Field, ObjectType } from 'type-graphql';
import SimplifiedArtist from '../artist/SimplifiedArtist';
import IAlbum from './IAlbum';

@ObjectType({ implements: IAlbum })
class SimplifiedAlbum extends IAlbum {
  @Field((_type) => [SimplifiedArtist])
  artists: SimplifiedArtist[];
}

export default SimplifiedAlbum;
