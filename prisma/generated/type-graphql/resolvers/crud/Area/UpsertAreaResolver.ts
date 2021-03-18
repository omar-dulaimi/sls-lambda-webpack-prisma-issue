import * as TypeGraphQL from "type-graphql";
import { UpsertAreaArgs } from "./args/UpsertAreaArgs";
import { Area } from "../../../models/Area";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class UpsertAreaResolver {
  @TypeGraphQL.Mutation(_returns => Area, {
    nullable: false
  })
  async upsertArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAreaArgs): Promise<Area> {
    return getPrismaFromContext(ctx).area.upsert(args);
  }
}
