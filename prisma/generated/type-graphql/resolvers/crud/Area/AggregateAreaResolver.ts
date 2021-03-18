import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAreaArgs } from "./args/AggregateAreaArgs";
import { Area } from "../../../models/Area";
import { AggregateArea } from "../../outputs/AggregateArea";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class AggregateAreaResolver {
  @TypeGraphQL.Query(_returns => AggregateArea, {
    nullable: false
  })
  async aggregateArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAreaArgs): Promise<AggregateArea> {
    return getPrismaFromContext(ctx).area.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
