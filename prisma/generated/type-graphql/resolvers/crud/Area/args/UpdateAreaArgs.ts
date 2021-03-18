import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AreaUpdateInput } from "../../../inputs/AreaUpdateInput";
import { AreaWhereUniqueInput } from "../../../inputs/AreaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAreaArgs {
  @TypeGraphQL.Field(_type => AreaUpdateInput, {
    nullable: false
  })
  data!: AreaUpdateInput;

  @TypeGraphQL.Field(_type => AreaWhereUniqueInput, {
    nullable: false
  })
  where!: AreaWhereUniqueInput;
}
