import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient;
    headers: Array<string>;
}

export function createContext(): Context {
    return { prisma, headers: [] };
}
