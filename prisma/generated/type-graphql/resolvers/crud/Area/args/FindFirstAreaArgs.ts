import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AreaOrderByInput } from "../../../inputs/AreaOrderByInput";
import { AreaWhereInput } from "../../../inputs/AreaWhereInput";
import { AreaWhereUniqueInput } from "../../../inputs/AreaWhereUniqueInput";
import { AreaScalarFieldEnum } from "../../../../enums/AreaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAreaArgs {
  @TypeGraphQL.Field(_type => AreaWhereInput, {
    nullable: true
  })
  where?: AreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AreaOrderByInput], {
    nullable: true
  })
  orderBy?: AreaOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => AreaWhereUniqueInput, {
    nullable: true
  })
  cursor?: AreaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AreaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
