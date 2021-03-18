import * as TypeGraphQL from "type-graphql";
import { DeleteAreaArgs } from "./args/DeleteAreaArgs";
import { Area } from "../../../models/Area";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class DeleteAreaResolver {
  @TypeGraphQL.Mutation(_returns => Area, {
    nullable: true
  })
  async deleteArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAreaArgs): Promise<Area | null> {
    return getPrismaFromContext(ctx).area.delete(args);
  }
}
