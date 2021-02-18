import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
class Image {
  @Field((_type) => Int, { nullable: true })
  height: number;

  @Field((_type) => Int, { nullable: true })
  width: number;

  @Field()
  url: string;
}

export default Image;
