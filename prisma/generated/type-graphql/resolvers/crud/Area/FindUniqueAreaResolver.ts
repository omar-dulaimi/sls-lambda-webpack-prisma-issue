import * as TypeGraphQL from "type-graphql";
import { FindUniqueAreaArgs } from "./args/FindUniqueAreaArgs";
import { Area } from "../../../models/Area";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class FindUniqueAreaResolver {
  @TypeGraphQL.Query(_returns => Area, {
    nullable: true
  })
  async area(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAreaArgs): Promise<Area | null> {
    return getPrismaFromContext(ctx).area.findUnique(args);
  }
}
