import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AreaOrderByInput } from "../../../inputs/AreaOrderByInput";
import { AreaScalarWhereWithAggregatesInput } from "../../../inputs/AreaScalarWhereWithAggregatesInput";
import { AreaWhereInput } from "../../../inputs/AreaWhereInput";
import { AreaScalarFieldEnum } from "../../../../enums/AreaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAreaArgs {
  @TypeGraphQL.Field(_type => AreaWhereInput, {
    nullable: true
  })
  where?: AreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AreaOrderByInput], {
    nullable: true
  })
  orderBy?: AreaOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AreaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => AreaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AreaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
