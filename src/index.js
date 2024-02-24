import { ApolloServer } from 'apollo-server-express';
import express  from 'express';

import typeDefs from "./schema";
import resolvers from "./resolvers";

const app = express()


async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({app, path: "/graphql"})
}

startServer();

app.listen(8080);



