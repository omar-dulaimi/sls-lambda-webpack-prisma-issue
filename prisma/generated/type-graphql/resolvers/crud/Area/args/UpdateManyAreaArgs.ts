import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AreaUpdateManyMutationInput } from "../../../inputs/AreaUpdateManyMutationInput";
import { AreaWhereInput } from "../../../inputs/AreaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAreaArgs {
  @TypeGraphQL.Field(_type => AreaUpdateManyMutationInput, {
    nullable: false
  })
  data!: AreaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AreaWhereInput, {
    nullable: true
  })
  where?: AreaWhereInput | undefined;
}
