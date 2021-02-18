/* eslint-disable import/first */
/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import http from 'http';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import app from './app';
import config from './config/config';
import UserResolver from './graphql/resolvers/userResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const { accessToken, refreshToken } = req.session;

      if (!accessToken || !refreshToken) {
        throw new AuthenticationError('not authenticated');
      }

      const user = { accessToken, refreshToken };

      return { user };
    },
  });

  server.applyMiddleware({ app, path: config.endpoint, cors: false });

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
