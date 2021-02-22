import { Field, ObjectType } from 'type-graphql';
import SimplifiedArtist from '../artist/SimplifiedArtist';
import ITrack from './ITrack';

@ObjectType({ implements: ITrack })
class SimplifiedTrack extends ITrack {
  @Field((_type) => [SimplifiedArtist])
  artists: SimplifiedArtist[];
}

export default SimplifiedTrack;
