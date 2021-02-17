/* eslint-disable import/first */
/* eslint-disable no-console */
require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import app from './app';
import config from './config/config';

async function main() {
  const schema = await buildSchema({
    resolvers: [], // yet missing
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app, path: config.endpoint });

  const httpServer = http.createServer(app);

  httpServer.listen({ port: config.port }, () => {
    const playground =
      config.nodeEnv === 'development'
        ? `http://localhost:${config.port}${config.endpoint}`
        : 'off';

    console.log(`Server started, listening on port ${config.port}`);
    console.log(`Playground: ${playground}`);
  });
}

main();
