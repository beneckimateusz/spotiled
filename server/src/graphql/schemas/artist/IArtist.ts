import { Field, ID, InterfaceType } from 'type-graphql';
import ExternalUrls from '../common/ExternalUrls';

@InterfaceType()
abstract class IArtist {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((_type) => ExternalUrls)
  external_urls: ExternalUrls;
}

export default IArtist;
