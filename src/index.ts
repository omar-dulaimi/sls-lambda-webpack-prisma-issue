import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';
import { createContext } from './context';
import buildSchema from './buildSchema';

(global as any).schema = (global as any).schema || buildSchema();
const schema = (global as any).schema;

const prismaContext = createContext();
const server = new ApolloServer({
    schema,
    context: ({ event }) => ({
        ...prismaContext,
        headers: event.headers,
    }),
    introspection: true,
    playground: {
        endpoint: process.env.PLAYGROUND_ENDPOINT,
    },
});

export const handler = server.createHandler();
