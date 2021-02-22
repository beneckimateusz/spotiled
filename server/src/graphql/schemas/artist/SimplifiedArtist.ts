import { ObjectType } from 'type-graphql';
import IArtist from './IArtist';

@ObjectType({ implements: IArtist })
class SimplifiedArtist extends IArtist {}

export default SimplifiedArtist;
