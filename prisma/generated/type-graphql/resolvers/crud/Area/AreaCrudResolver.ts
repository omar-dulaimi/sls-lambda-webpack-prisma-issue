import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAreaArgs } from "./args/AggregateAreaArgs";
import { CreateAreaArgs } from "./args/CreateAreaArgs";
import { DeleteAreaArgs } from "./args/DeleteAreaArgs";
import { DeleteManyAreaArgs } from "./args/DeleteManyAreaArgs";
import { FindFirstAreaArgs } from "./args/FindFirstAreaArgs";
import { FindManyAreaArgs } from "./args/FindManyAreaArgs";
import { FindUniqueAreaArgs } from "./args/FindUniqueAreaArgs";
import { GroupByAreaArgs } from "./args/GroupByAreaArgs";
import { UpdateAreaArgs } from "./args/UpdateAreaArgs";
import { UpdateManyAreaArgs } from "./args/UpdateManyAreaArgs";
import { UpsertAreaArgs } from "./args/UpsertAreaArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Area } from "../../../models/Area";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateArea } from "../../outputs/AggregateArea";
import { AreaGroupBy } from "../../outputs/AreaGroupBy";

@TypeGraphQL.Resolver(_of => Area)
export class AreaCrudResolver {
  @TypeGraphQL.Query(_returns => Area, {
    nullable: true
  })
  async area(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAreaArgs): Promise<Area | null> {
    return getPrismaFromContext(ctx).area.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Area, {
    nullable: true
  })
  async findFirstArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAreaArgs): Promise<Area | null> {
    return getPrismaFromContext(ctx).area.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Area], {
    nullable: false
  })
  async areas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAreaArgs): Promise<Area[]> {
    return getPrismaFromContext(ctx).area.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Area, {
    nullable: false
  })
  async createArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAreaArgs): Promise<Area> {
    return getPrismaFromContext(ctx).area.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Area, {
    nullable: true
  })
  async deleteArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAreaArgs): Promise<Area | null> {
    return getPrismaFromContext(ctx).area.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Area, {
    nullable: true
  })
  async updateArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAreaArgs): Promise<Area | null> {
    return getPrismaFromContext(ctx).area.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAreaArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).area.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAreaArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).area.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Area, {
    nullable: false
  })
  async upsertArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAreaArgs): Promise<Area> {
    return getPrismaFromContext(ctx).area.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateArea, {
    nullable: false
  })
  async aggregateArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAreaArgs): Promise<AggregateArea> {
    return getPrismaFromContext(ctx).area.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [AreaGroupBy], {
    nullable: false
  })
  async groupByArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAreaArgs): Promise<AreaGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).area.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
