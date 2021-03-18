import * as TypeGraphQL from "type-graphql";
import { FindManyAreaArgs } from "./args/FindManyAreaArgs";
import { Area } from "../../../models/Area";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class FindManyAreaResolver {
  @TypeGraphQL.Query(_returns => [Area], {
    nullable: false
  })
  async areas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAreaArgs): Promise<Area[]> {
    return getPrismaFromContext(ctx).area.findMany(args);
  }
}
