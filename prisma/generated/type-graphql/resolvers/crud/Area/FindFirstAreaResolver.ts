import * as TypeGraphQL from "type-graphql";
import { FindFirstAreaArgs } from "./args/FindFirstAreaArgs";
import { Area } from "../../../models/Area";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class FindFirstAreaResolver {
  @TypeGraphQL.Query(_returns => Area, {
    nullable: true
  })
  async findFirstArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAreaArgs): Promise<Area | null> {
    return getPrismaFromContext(ctx).area.findFirst(args);
  }
}
