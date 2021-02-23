import { Field, ID, InterfaceType } from 'type-graphql';
import ExternalUrls from '../common/ExternalUrls';
import Image from '../common/Image';

@InterfaceType()
abstract class IAlbum {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  album_type: string;

  @Field((_type) => ExternalUrls)
  external_urls: ExternalUrls;

  @Field()
  release_date: string;

  @Field((_type) => [Image])
  images: Image[];
}

export default IAlbum;
