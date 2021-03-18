import * as TypeGraphQL from "type-graphql";
import { CreateAreaArgs } from "./args/CreateAreaArgs";
import { Area } from "../../../models/Area";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class CreateAreaResolver {
  @TypeGraphQL.Mutation(_returns => Area, {
    nullable: false
  })
  async createArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAreaArgs): Promise<Area> {
    return getPrismaFromContext(ctx).area.create(args);
  }
}
