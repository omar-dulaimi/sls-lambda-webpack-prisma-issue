import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
    service: 'graphql-api-prisma2',
    frameworkVersion: '2',
    provider: {
        name: 'aws',
        runtime: 'nodejs12.x',
        lambdaHashingVersion: '20201221',
        stage: 'staging',
        region: 'us-east-1',
        stackName:
            'cfn-stack-${env:APP_ENV, opt:stage, self:provider.stage}-graphql-api-prisma2',
        apiName: '${env:APP_ENV, opt:stage, self:provider.stage}-graphql-api-prisma2',
        memorySize: 512,
        vpc: {
            securityGroupIds: ['sg-id'],
            subnetIds: [
                'subnet-id',
                'subnet-id',
                'subnet-id',
            ],
        },
    },
    plugins: ['serverless-webpack', 'serverless-dotenv-plugin', 'serverless-offline'],
    functions: {
        graphql: {
            handler: 'src/index.handler',
            timeout: 30,
            events: [
                {
                    http: {
                        path: 'graphql',
                        method: 'post',
                    },
                },
                {
                    http: {
                        path: 'graphql',
                        method: 'get',
                    },
                },
            ],
        },
    },
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true,
            packager: 'yarn',
            packagerOptions: {
                scripts: ['prisma generate'],
                noFrozenLockfile: true,
            },
        },
        dotenv: {
            path: '.env.${opt:stage, self:provider.stage}',
        },
        'serverless-offline': {
            useChildProcesses: true,
        },
    },
};

module.exports = serverlessConfiguration;
