import * as TypeGraphQL from "type-graphql";
import { UpdateManyAreaArgs } from "./args/UpdateManyAreaArgs";
import { Area } from "../../../models/Area";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class UpdateManyAreaResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAreaArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).area.updateMany(args);
  }
}
