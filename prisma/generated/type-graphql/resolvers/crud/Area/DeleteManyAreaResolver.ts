import * as TypeGraphQL from "type-graphql";
import { DeleteManyAreaArgs } from "./args/DeleteManyAreaArgs";
import { Area } from "../../../models/Area";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Area)
export class DeleteManyAreaResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAreaArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).area.deleteMany(args);
  }
}
