import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AreaWhereInput {
  @TypeGraphQL.Field(_type => [AreaWhereInput], {
    nullable: true
  })
  AND?: AreaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AreaWhereInput], {
    nullable: true
  })
  OR?: AreaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AreaWhereInput], {
    nullable: true
  })
  NOT?: AreaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
