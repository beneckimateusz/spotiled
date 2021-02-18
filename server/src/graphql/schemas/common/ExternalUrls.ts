import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class ExternalUrls {
  @Field()
  spotify: string;
}

export default ExternalUrls;
