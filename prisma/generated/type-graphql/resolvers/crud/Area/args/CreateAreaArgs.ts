import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AreaCreateInput } from "../../../inputs/AreaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAreaArgs {
  @TypeGraphQL.Field(_type => AreaCreateInput, {
    nullable: false
  })
  data!: AreaCreateInput;
}
