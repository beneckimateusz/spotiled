import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
class Followers {
  @Field({ nullable: true })
  href: string;

  @Field((_type) => Int)
  total: number;
}

export default Followers;
