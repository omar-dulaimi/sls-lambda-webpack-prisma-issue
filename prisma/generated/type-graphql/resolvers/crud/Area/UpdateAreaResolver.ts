import * as TypeGraphQL from "type-graphql";
import { UpdateAreaArgs } from "./args/UpdateAreaArgs";
import { Area } from "../../../models/Area";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class UpdateAreaResolver {
  @TypeGraphQL.Mutation(_returns => Area, {
    nullable: true
  })
  async updateArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAreaArgs): Promise<Area | null> {
    return getPrismaFromContext(ctx).area.update(args);
  }
}
