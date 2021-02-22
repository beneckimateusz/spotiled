import { Field, ID, Int, InterfaceType } from 'type-graphql';
import ExternalUrls from '../common/ExternalUrls';

@InterfaceType()
abstract class ITrack {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((_type) => ExternalUrls)
  external_urls: ExternalUrls;

  @Field((_type) => Int)
  duration_ms: number;

  @Field({ nullable: true })
  preview_url: string;
}

export default ITrack;
