import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AreaWhereUniqueInput } from "../../../inputs/AreaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAreaArgs {
  @TypeGraphQL.Field(_type => AreaWhereUniqueInput, {
    nullable: false
  })
  where!: AreaWhereUniqueInput;
}
