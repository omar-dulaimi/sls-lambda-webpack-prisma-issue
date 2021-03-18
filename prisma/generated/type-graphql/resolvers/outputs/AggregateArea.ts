import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AreaCountAggregate } from "../outputs/AreaCountAggregate";
import { AreaMaxAggregate } from "../outputs/AreaMaxAggregate";
import { AreaMinAggregate } from "../outputs/AreaMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateArea {
  @TypeGraphQL.Field(_type => AreaCountAggregate, {
    nullable: true
  })
  count!: AreaCountAggregate | null;

  @TypeGraphQL.Field(_type => AreaMinAggregate, {
    nullable: true
  })
  min!: AreaMinAggregate | null;

  @TypeGraphQL.Field(_type => AreaMaxAggregate, {
    nullable: true
  })
  max!: AreaMaxAggregate | null;
}
