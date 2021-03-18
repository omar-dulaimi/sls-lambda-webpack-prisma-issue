import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AreaWhereInput } from "../../../inputs/AreaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAreaArgs {
  @TypeGraphQL.Field(_type => AreaWhereInput, {
    nullable: true
  })
  where?: AreaWhereInput | undefined;
}
