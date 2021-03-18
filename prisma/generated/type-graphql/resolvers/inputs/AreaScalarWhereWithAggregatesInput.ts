import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AreaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AreaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AreaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AreaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AreaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AreaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AreaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
