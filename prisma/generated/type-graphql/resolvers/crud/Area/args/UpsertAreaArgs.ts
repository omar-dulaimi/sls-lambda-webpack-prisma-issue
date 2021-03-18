import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AreaCreateInput } from "../../../inputs/AreaCreateInput";
import { AreaUpdateInput } from "../../../inputs/AreaUpdateInput";
import { AreaWhereUniqueInput } from "../../../inputs/AreaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAreaArgs {
  @TypeGraphQL.Field(_type => AreaWhereUniqueInput, {
    nullable: false
  })
  where!: AreaWhereUniqueInput;

  @TypeGraphQL.Field(_type => AreaCreateInput, {
    nullable: false
  })
  create!: AreaCreateInput;

  @TypeGraphQL.Field(_type => AreaUpdateInput, {
    nullable: false
  })
  update!: AreaUpdateInput;
}
