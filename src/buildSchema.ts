import { GraphQLSchema } from 'graphql';
import * as tq from 'type-graphql';
import { AreaCrudResolver } from '../prisma/generated/type-graphql';

export default function buildSchema(): GraphQLSchema {
    return tq.buildSchemaSync({
        resolvers: [
            // Area
            AreaCrudResolver,
        ],
        validate: true,
    });
}
